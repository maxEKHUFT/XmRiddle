//the initilisation for firebase etc , assume this is all safe and should be here!!!
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaV3Provider }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-check.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhtSMvWgP0GZctnPZMptlL_8rlAIeEPOs",
  authDomain: "xmriddle-2938f.firebaseapp.com",
  projectId: "xmriddle-2938f",
  storageBucket: "xmriddle-2938f.firebasestorage.app",
  messagingSenderId: "360913486203",
  appId: "1:360913486203:web:c0010f58bf79522f4cfdde"
};

const app = initializeApp(firebaseConfig);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcY5WosAAAAABQEUnqFTD0NdQRkaxEPSwQI7ZlP"),
  isTokenAutoRefreshEnabled: true
});

const db = getFirestore(app);

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  setDoc
}
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function submitScore(name, score) {
  try {
    await addDoc(collection(db, "scores"), {
      name,
      score: Number(score),       
      createdAt: serverTimestamp() 
    });
    console.log("Score submitted");
  } catch (err) {
    console.error("Error submitting score:", err);
  }
}
export async function getTopScores(max = 10) {
  const q = query(
    collection(db, "scores"),
    orderBy("score","desc"),
    limit(max)
    );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}
// json srray catalogue , these are preset examples ive grabbed from scorecard but the format is v consistent so
// it should be easy to replicate in another format (sql or something , or a hosted json)
//you state the svg (from measure in power bi currently) , the icons that are the answer/correct , explaination to show when you answer
// and the indicator of higher/lower is better to render on result also.
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let catalogue = [];

async function loadCatalogue() {
  const res = await fetch('./catalogue.json');
  catalogue = await res.json();
  shuffle(catalogue);
}

//       icon grid where ive set icon label/id for referencing elsewhere , label tooltip note and then the icon png to render.

const icons = [
  { id: "pass", label: "Will consistently pass", src: "btns/pass.png" },
  { id: "fail", label: "Will consistently fail", src: "btns/fail.png" },
  { id: "incon", label: "Will not consistently pass or fail", src: "btns/incon.png" },
  { id: "comcause", label: "Common cause - no significant change", src: "btns/comcause.png" },
  { id: "highimp", label: "Special cause of improving nature", src: "btns/highimp.png" },
  { id: "lowimp", label: "Special cause of improving nature", src: "btns/lowimp.png" },
  { id: "highcon", label: "Special cause of concerning nature", src: "btns/highcon.png" },
  { id: "lowcon", label: "Special cause of concerning nature", src: "btns/lowcon.png" }
];

const iconsContainer = document.getElementById("icons");

//this defaults the chart to show first ,so at the moment its sequential but i can randomise later
let currentIndex = 0;
let score = 0;

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1200);
}

// starts the game loop , loading the svg , direction text , icon grid and the submit button through the functions below
window.onload = async function() {
    await loadCatalogue();   // ⬅ NEW

    loadChart();
    loadDir();
    loadIcons();
    setupSubmit();

    document.getElementById("submit").disabled = true;
    document.getElementById("next").style.display = "none";
    document.getElementById("next").addEventListener("click", nextChart);

};


// loads the svg chart image form the json catalogue
function loadChart() {
//old load   document.getElementById("chart").innerHTML = catalogue[currentIndex].svg;
    const chartEl = document.getElementById("chart");

    chartEl.innerHTML = catalogue[currentIndex].svg;

    const svg = chartEl.querySelector("svg");

    svg.classList.remove("chart-in");
    void svg.offsetWidth;
    svg.classList.add("chart-in");
}

// loads the direction text form the json catalogue
function loadDir() {
    document.getElementById("direction").innerHTML = catalogue[currentIndex].direction;
}

// this renders my clickable icon grid
function loadIcons() {
    const iconsContainer = document.getElementById("icons");
    iconsContainer.innerHTML = "";

    icons.forEach(icon => {
        const tile = document.createElement("div");
        tile.classList.add("icon-tile");
        tile.dataset.id = icon.id;
        tile.title = icon.label;

//this is what enables my pngs to render in my buttons
        const img = document.createElement("img");
        img.src = icon.src;
        img.alt = icon.label;
        img.style.width = "60px";   // this is the size of the png in button
        img.style.height = "60px";

        tile.appendChild(img);
//below this is my listener events for the button , curerntly on click
//also alerts , in the future i want alerts to popup mid screen rather than default
tile.addEventListener("click", () => {
    const selectedCount =
        document.querySelectorAll(".icon-tile.selected").length;

    if (tile.classList.contains("selected")) {
        tile.classList.remove("selected");
    } else if (selectedCount < 2) {
        tile.classList.add("selected");
    } else {
        showToast("You can only select 2 icons.");
    }

    updateSubmitState();
});

        iconsContainer.appendChild(tile);
    });
}

// this controls my submit button, only available after 2 choices are selected
function setupSubmit() {
    const submitBtn = document.getElementById("submit");

    // Remove any existing click handlers to avoid duplicates
    submitBtn.replaceWith(submitBtn.cloneNode(true));
    const freshSubmit = document.getElementById("submit");

    freshSubmit.addEventListener("click", () => {
        const selected = [...document.querySelectorAll(".icon-tile.selected")]
            .map(t => t.dataset.id);

        if (selected.length < 2) {
            showToast("Please select 2 icons before submitting.");
            return;
        }

        const correct = catalogue[currentIndex].correctIcons;

        const isCorrect =
            selected.length === correct.length &&
            selected.every(id => correct.includes(id));

        revealResult(isCorrect, correct);
    });
}

function revealResult(isCorrect, correctIcons) {
    document.querySelectorAll(".icon-tile").forEach(tile => {
        const id = tile.dataset.id;

        if (correctIcons.includes(id)) {
            tile.classList.add("correct");
        } else if (tile.classList.contains("selected")) {
            tile.classList.add("wrong");
        }

        tile.classList.remove("selected");
        tile.style.pointerEvents = "none";
    });

    const resultEl = document.getElementById("result");
    resultEl.className = "";
    void resultEl.offsetWidth;

    if (isCorrect) {
        score++;
        resultEl.innerText = "Correct!";
        resultEl.classList.add("result-correct");
    } else {
        resultEl.innerText = "Not quite";
        resultEl.classList.add("result-wrong");
    }

    document.getElementById("explanation").innerText =
        catalogue[currentIndex].explanation;

    const submitBtn = document.getElementById("submit");

    const newBtn = submitBtn.cloneNode(true);
    submitBtn.replaceWith(newBtn);

    newBtn.innerText = "> > >";
    newBtn.disabled = false;
    newBtn.onclick = nextChart;
}

function updateSubmitState() {
    const selectedCount =
        document.querySelectorAll(".icon-tile.selected").length;

    document.getElementById("submit").disabled = selectedCount !== 2;
}

async function nextChart() {
    currentIndex++;

    if (currentIndex < catalogue.length) {
        loadChart();
        loadDir();
        loadIcons();

        const submitBtn = document.getElementById("submit");
        submitBtn.innerText = "Submit";
        submitBtn.disabled = true;
        setupSubmit();

        const resultEl = document.getElementById("result");
        resultEl.innerText = "";
        resultEl.className = "";

        document.getElementById("explanation").innerText = "";

        document.querySelectorAll(".icon-tile").forEach(tile => {
            tile.classList.remove("correct", "wrong", "selected");
            tile.style.pointerEvents = "auto";
        });

    } else {
        // END OF GAME
        showToast("All charts completed!");

        const name = prompt("Enter your name:");
        if (name) {
            try {
                await submitScore(name, score);

                await setDoc(doc(db, "users", name), {
                    lastSubmission: serverTimestamp()
                }, { merge: true });

                showToast("Score submitted! Come back in 10 minutes for a new attempt.");
            } catch (err) {
                console.error("Error submitting score:", err);
                showToast("Failed to submit score. Try again later.");
            }
        }

        const submitBtn = document.getElementById("submit");
        submitBtn.style.display = "none";
    } // <-- closes the else block
} // <-- closes nextChart()

// This is all your Firebase leaderboard function
async function showLeaderboard() {
    const listDiv = document.getElementById("leaderboardList");
    listDiv.innerHTML = "Loading...";

    try {
        const topScores = await getTopScores(10);
        listDiv.innerHTML = "";

        if (topScores.length === 0) {
            listDiv.innerHTML = "<p>No scores yet.</p>";
        } else {
            topScores.forEach((entry, index) => {
                const row = document.createElement("div");
                row.innerHTML = `<strong>${index + 1}. ${entry.name}</strong>: ${entry.score}`;
                listDiv.appendChild(row);
            });
        }
    } catch (err) {
        listDiv.innerHTML = "<p>Error loading leaderboard.</p>";
        console.error(err);
    }

    document.getElementById("leaderboardModal").classList.add("show");
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("closeLeaderboard").addEventListener("click", () => {
        document.getElementById("leaderboardModal").classList.remove("show");
    });
    document.getElementById("iconleaderboard").addEventListener("click", showLeaderboard);
});




