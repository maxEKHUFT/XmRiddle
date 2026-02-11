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

const LB_KEY = "leaderboard_v1";

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1200);
}


function saveToLeaderboard(name, score, total) {
  const entry = {
    name: (name || "Anonymous").trim().slice(0, 40) || "Anonymous",
    score: Number(score) || 0,
    total: Number(total) || 0,
    date: new Date().toISOString()
  };

  let board = getLeaderboard();
  board.push(entry);

  board.sort((a, b) => b.score - a.score || new Date(a.date) - new Date(b.date));
  board = board.slice(0, 10);

  localStorage.setItem(LB_KEY, JSON.stringify(board));
}

function renderLeaderboard() {
  const list = document.getElementById("leaderboardList");
  if (!list) return;

  const board = getLeaderboard();

  if (board.length === 0) {
    list.innerHTML = "<p>No scores yet.</p>";
    return;
  }

  list.innerHTML = "";

  board.forEach((e, idx) => {
    const row = document.createElement("div");
    row.className = "lb-entry";

    row.innerHTML = `
      <span class="lb-rank">${idx + 1}</span>
      <span class="lb-name">${e.name}</span>
      <span class="lb-score">${e.score} / ${e.total}</span>
    `;

    list.appendChild(row);
  });
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

// this controls my submit button , bit fiddly but essentially its only available/opaque after 2 choices have been chosen
function setupSubmit() {
document.getElementById("submit").addEventListener("click", () => {
    const selected = [...document.querySelectorAll(".icon-tile.selected")]
        .map(t => t.dataset.id);

 //as above this bit specifically checks selection rate
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
//this is the newer result function , im trying to colour/animate the different resulsts (seems to work so far)
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

    document.getElementById("submit").disabled = true;
    document.getElementById("next").style.display = "inline-block";
}


function updateSubmitState() {
    const selectedCount =
        document.querySelectorAll(".icon-tile.selected").length;

    document.getElementById("submit").disabled = selectedCount !== 2;
}

function nextChart() {
    currentIndex++;

    if (currentIndex < catalogue.length) {

        loadChart();
        loadDir(); 
        loadIcons();

// hide next button till needed
        document.getElementById("next").style.display = "none";

// submit starts disabled
        document.getElementById("submit").disabled = true;

// clear previous round UI
        const resultEl = document.getElementById("result");
        resultEl.innerText = "";
        resultEl.className = "";

        document.getElementById("explanation").innerText = "";

        // reset icons
        document.querySelectorAll(".icon-tile").forEach(tile => {
            tile.classList.remove("correct", "wrong", "selected");
            tile.style.pointerEvents = "auto";
        });

    } else {
        showToast("All charts completed!");
        document.getElementById("next").style.display = "none";
    }

}




