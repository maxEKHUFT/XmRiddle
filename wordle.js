// json srray catalogue , these are preset examples ive grabbed from scorecard but the format is v consistent so
// it should be easy to replicate in another format (sql or something , or a hosted json)
//you state the svg (from measure in power bi currently) , the icons that are the answer/correct , explaination to show when you answer
// and the indicator of higher/lower is better to render on result also.
const catalogue = [
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,33 143,33 136,33 130,33 123,33 117,33 110,33 104,33 97,33 91,33 84,33 78,33 71,33 65,33 58,33 52,33 45,33 39,33 32,33 26,33 19,33 13,33 6,33 0,33' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,43 143,43 136,43 130,43 123,43 117,43 110,43 104,43 97,43 91,43 84,43 78,43 71,43 65,43 58,43 52,43 45,43 39,43 32,43 26,43 19,43 13,43 6,43 0,43' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,0 143,0 136,0 130,0 123,0 117,0 110,0 104,0 97,0 91,0 84,0 78,0 71,0 65,0 58,0 52,0 45,0 39,0 32,0 26,0 19,0 13,0 6,0 0,0' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,38 143,38 136,38 130,38 123,38 117,38 110,38 104,38 97,38 91,38 84,38 78,38 71,38 65,38 58,38 52,38 45,38 39,38 32,38 26,38 19,38 13,38 6,38 0,38' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,29 143,28 136,29 130,30 123,33 117,30 110,30 104,32 97,29 91,33 84,37 78,40 71,38 65,41 58,40 52,42 45,43 39,43 32,42 26,44 19,47 13,48 6,49 0,50' stroke-linecap='round' stroke-linejoin='round' /><circle cx='52' cy='42' r='1.25' fill='#F25C05' /><circle cx='45' cy='43' r='1.25' fill='#F25C05' /><circle cx='39' cy='43' r='1.25' fill='#F25C05' /><circle cx='32' cy='42' r='1.25' fill='#F25C05' /><circle cx='26' cy='44' r='1.25' fill='#F25C05' /><circle cx='78' cy='40' r='1.25' fill='#F25C05' /><circle cx='19' cy='47' r='1.25' fill='#F25C05' /><circle cx='13' cy='48' r='1.25' fill='#F25C05' /><circle cx='71' cy='38' r='1.25' fill='#F25C05' /><circle cx='65' cy='41' r='1.25' fill='#F25C05' /><circle cx='58' cy='40' r='1.25' fill='#F25C05' /><circle cx='6' cy='49' r='1.25' fill='#F25C05' /><circle cx='0' cy='50' r='1.25' fill='#F25C05' /><circle cx='104' cy='32' r='1.25' fill='#0477BF' /><circle cx='97' cy='29' r='1.25' fill='#0477BF' /><circle cx='143' cy='28' r='1.25' fill='#0477BF' /><circle cx='91' cy='33' r='1.25' fill='#0477BF' /><circle cx='136' cy='29' r='1.25' fill='#0477BF' /><circle cx='84' cy='37' r='1.25' fill='#0477BF' /><circle cx='130' cy='30' r='1.25' fill='#0477BF' /><circle cx='123' cy='33' r='1.25' fill='#0477BF' /><circle cx='117' cy='30' r='1.25' fill='#0477BF' /><circle cx='110' cy='30' r='1.25' fill='#0477BF' /><circle cx='150' cy='29' r='1.75' fill='white' stroke='#0477BF' stroke-width='1.25' /></svg>",
    correctIcons: ["fail","highimp"],
    explanation: "Will consistently fail the target if nothing changes; Special cause of improving nature or lower pressure due to Higher values.",
    direction: "Higher is better"
  },
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,10 143,10 136,10 130,10 123,10 117,10 110,10 104,10 97,10 91,10 84,10 78,10 71,10 65,10 58,10 52,10 45,10 39,10 32,10 26,10 19,10 13,10 6,10 0,10' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,38 143,38 136,38 130,38 123,38 117,38 110,38 104,38 97,38 91,38 84,38 78,38 71,38 65,38 58,38 52,38 45,38 39,38 32,38 26,38 19,38 13,38 6,38 0,38' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,0 143,0 136,0 130,0 123,0 117,0 110,0 104,0 97,0 91,0 84,0 78,0 71,0 65,0 58,0 52,0 45,0 39,0 32,0 26,0 19,0 13,0 6,0 0,0' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,24 143,24 136,24 130,24 123,24 117,24 110,24 104,24 97,24 91,24 84,24 78,24 71,24 65,24 58,24 52,24 45,24 39,24 32,24 26,24 19,24 13,24 6,24 0,24' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,28 143,36 136,50 130,45 123,43 117,44 110,38 104,27 97,24 91,18 84,14 78,14 71,11 65,4 58,8 52,16 45,7 39,13 32,17 26,28 19,24 13,24 6,25 0,18' stroke-linecap='round' stroke-linejoin='round' /><circle cx='91' cy='18' r='1.25' fill='#F25C05' /><circle cx='84' cy='14' r='1.25' fill='#F25C05' /><circle cx='45' cy='7' r='1.25' fill='#F25C05' /><circle cx='39' cy='13' r='1.25' fill='#F25C05' /><circle cx='97' cy='24' r='1.25' fill='#F25C05' /><circle cx='32' cy='17' r='1.25' fill='#F25C05' /><circle cx='65' cy='4' r='1.25' fill='#F25C05' /><circle cx='58' cy='8' r='1.25' fill='#F25C05' /><circle cx='78' cy='14' r='1.25' fill='#F25C05' /><circle cx='71' cy='11' r='1.25' fill='#F25C05' /><circle cx='52' cy='16' r='1.25' fill='#F25C05' /><circle cx='143' cy='36' r='1.25' fill='#0477BF' /><circle cx='104' cy='27' r='1.25' fill='#0477BF' /><circle cx='136' cy='50' r='1.25' fill='#0477BF' /><circle cx='123' cy='43' r='1.25' fill='#0477BF' /><circle cx='117' cy='44' r='1.25' fill='#0477BF' /><circle cx='110' cy='38' r='1.25' fill='#0477BF' /><circle cx='130' cy='45' r='1.25' fill='#0477BF' /><circle cx='26' cy='28' r='1.25' fill='#8E99A1' /><circle cx='0' cy='18' r='1.25' fill='#8E99A1' /><circle cx='19' cy='24' r='1.25' fill='#8E99A1' /><circle cx='6' cy='25' r='1.25' fill='#8E99A1' /><circle cx='13' cy='24' r='1.25' fill='#8E99A1' /><circle cx='150' cy='28' r='1.75' fill='white' stroke='#0477BF' stroke-width='1.25' /></svg>",
    correctIcons: ["pass","lowimp"],
    explanation: "Will consistently pass the target if nothing changes; Special cause of improving nature or lower pressure due to Lower values.",
    direction: "Lower is better"
  },  
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,30 143,30 136,30 130,30 123,30 117,30 110,30 104,30 97,30 91,30 84,30 78,30 71,30 65,30 58,30 52,30 45,30 39,30 32,30 26,30 19,30 13,30 6,30 0,30' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,48 143,48 136,48 130,48 123,48 117,48 110,48 104,48 97,48 91,48 84,48 78,48 71,48 65,48 58,48 52,48 45,48 39,48 32,48 26,48 19,48 13,48 6,48 0,48' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,0 143,0 136,0 130,0 123,0 117,0 110,0 104,0 97,0 91,0 84,0 78,0 71,0 65,0 58,0 52,0 45,0 39,0 32,0 26,0 19,0 13,0 6,0 0,0' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,39 143,39 136,39 130,39 123,39 117,39 110,39 104,39 97,39 91,39 84,39 78,39 71,39 65,39 58,39 52,39 45,39 39,39 32,39 26,39 19,39 13,39 6,39 0,39' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,32 143,36 136,29 130,31 123,25 117,32 110,30 104,31 97,32 91,42 84,41 78,41 71,39 65,43 58,44 52,48 45,44 39,42 32,45 26,44 19,50 13,44 6,47 0,44' stroke-linecap='round' stroke-linejoin='round' /><circle cx='91' cy='42' r='1.25' fill='#F25C05' /><circle cx='84' cy='41' r='1.25' fill='#F25C05' /><circle cx='71' cy='39' r='1.25' fill='#F25C05' /><circle cx='45' cy='44' r='1.25' fill='#F25C05' /><circle cx='78' cy='41' r='1.25' fill='#F25C05' /><circle cx='65' cy='43' r='1.25' fill='#F25C05' /><circle cx='58' cy='44' r='1.25' fill='#F25C05' /><circle cx='52' cy='48' r='1.25' fill='#F25C05' /><circle cx='39' cy='42' r='1.25' fill='#F25C05' /><circle cx='32' cy='45' r='1.25' fill='#F25C05' /><circle cx='26' cy='44' r='1.25' fill='#F25C05' /><circle cx='19' cy='50' r='1.25' fill='#F25C05' /><circle cx='13' cy='44' r='1.25' fill='#F25C05' /><circle cx='6' cy='47' r='1.25' fill='#F25C05' /><circle cx='0' cy='44' r='1.25' fill='#F25C05' /><circle cx='143' cy='36' r='1.25' fill='#0477BF' /><circle cx='136' cy='29' r='1.25' fill='#0477BF' /><circle cx='117' cy='32' r='1.25' fill='#0477BF' /><circle cx='104' cy='31' r='1.25' fill='#0477BF' /><circle cx='130' cy='31' r='1.25' fill='#0477BF' /><circle cx='123' cy='25' r='1.25' fill='#0477BF' /><circle cx='110' cy='30' r='1.25' fill='#0477BF' /><circle cx='97' cy='32' r='1.25' fill='#0477BF' /><circle cx='150' cy='32' r='1.75' fill='white' stroke='#0477BF' stroke-width='1.25' /></svg>",
    correctIcons: ["fail","highimp"],
    explanation: "Will consistently fail the target if nothing changes; Special cause of improving nature or lower pressure due to Higher values.",
    direction: "Higher is better"
  },
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,4 143,4 136,4 130,4 123,4 117,4 110,4 104,4 97,4 91,4 84,4 78,4 71,4 65,4 58,4 52,4 45,4 39,4 32,4 26,4 19,4 13,4 6,4 0,4' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,50 143,50 136,50 130,50 123,50 117,50 110,50 104,50 97,50 91,50 84,50 78,50 71,50 65,50 58,50 52,50 45,50 39,50 32,50 26,50 19,50 13,50 6,50 0,50' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,4 143,4 136,4 130,4 123,4 117,4 110,4 104,4 97,4 91,4 84,4 78,4 71,4 65,4 58,4 52,4 45,4 39,4 32,4 26,4 19,4 13,4 6,4 0,4' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,27 143,27 136,27 130,27 123,27 117,27 110,27 104,27 97,27 91,27 84,27 78,27 71,27 65,27 58,27 52,27 45,27 39,27 32,27 26,27 19,27 13,27 6,27 0,27' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,0 143,25 136,34 130,23 123,10 117,25 110,19 104,34 97,30 91,38 84,25 78,25 71,18 65,39 58,29 52,25 45,25 39,34 32,32 26,39 19,37 13,27 6,30 0,35' stroke-linecap='round' stroke-linejoin='round' /><circle cx='13' cy='27' r='1.25' fill='#8E99A1' /><circle cx='97' cy='30' r='1.25' fill='#8E99A1' /><circle cx='117' cy='25' r='1.25' fill='#8E99A1' /><circle cx='52' cy='25' r='1.25' fill='#8E99A1' /><circle cx='110' cy='19' r='1.25' fill='#8E99A1' /><circle cx='45' cy='25' r='1.25' fill='#8E99A1' /><circle cx='84' cy='25' r='1.25' fill='#8E99A1' /><circle cx='78' cy='25' r='1.25' fill='#8E99A1' /><circle cx='0' cy='35' r='1.25' fill='#8E99A1' /><circle cx='130' cy='23' r='1.25' fill='#8E99A1' /><circle cx='91' cy='38' r='1.25' fill='#8E99A1' /><circle cx='39' cy='34' r='1.25' fill='#8E99A1' /><circle cx='104' cy='34' r='1.25' fill='#8E99A1' /><circle cx='19' cy='37' r='1.25' fill='#8E99A1' /><circle cx='71' cy='18' r='1.25' fill='#8E99A1' /><circle cx='6' cy='30' r='1.25' fill='#8E99A1' /><circle cx='58' cy='29' r='1.25' fill='#8E99A1' /><circle cx='32' cy='32' r='1.25' fill='#8E99A1' /><circle cx='123' cy='10' r='1.25' fill='#8E99A1' /><circle cx='26' cy='39' r='1.25' fill='#8E99A1' /><circle cx='65' cy='39' r='1.25' fill='#8E99A1' /><circle cx='136' cy='34' r='1.25' fill='#8E99A1' /><circle cx='143' cy='25' r='1.25' fill='#8E99A1' /><circle cx='150' cy='0' r='1.75' fill='white' stroke='#F25C05' stroke-width='1.25' /></svg>",
    correctIcons: ["incon","highcon"],
    explanation: "Will not consistently pass or fail the target if nothing changes; Special cause of concerning nature or higher pressure due to Higher values.",
    direction: "Lower is better"
  },
  {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,17 143,17 136,17 130,17 123,17 117,17 110,17 104,17 97,17 91,17 84,17 78,17 71,17 65,17 58,17 52,17 45,17 39,17 32,17 26,17 19,17 13,17 6,17 0,17' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,37 143,37 136,37 130,37 123,37 117,37 110,37 104,37 97,37 91,37 84,37 78,37 71,37 65,37 58,37 52,37 45,37 39,37 32,37 26,37 19,37 13,37 6,37 0,37' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,17 143,17 136,17 130,17 123,17 117,17 110,17 104,17 97,17 91,17 84,17 78,17 71,17 65,17 58,17 52,17 45,17 39,17 32,17 26,17 19,17 13,17 6,17 0,17' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,27 143,27 136,27 130,27 123,27 117,27 110,27 104,27 97,27 91,27 84,27 78,27 71,27 65,27 58,27 52,27 45,27 39,27 32,27 26,27 19,27 13,27 6,27 0,27' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,42 143,44 136,50 130,47 123,47 117,46 110,48 104,46 97,40 91,34 84,37 78,33 71,32 65,24 58,12 52,7 45,6 39,2 32,7 26,10 19,10 13,12 6,10 0,0' stroke-linecap='round' stroke-linejoin='round' /><circle cx='97' cy='40' r='1.25' fill='#0477BF' /><circle cx='65' cy='24' r='1.25' fill='#0477BF' /><circle cx='71' cy='32' r='1.25' fill='#0477BF' /><circle cx='78' cy='33' r='1.25' fill='#0477BF' /><circle cx='136' cy='50' r='1.25' fill='#0477BF' /><circle cx='84' cy='37' r='1.25' fill='#0477BF' /><circle cx='91' cy='34' r='1.25' fill='#0477BF' /><circle cx='104' cy='46' r='1.25' fill='#0477BF' /><circle cx='130' cy='47' r='1.25' fill='#0477BF' /><circle cx='143' cy='44' r='1.25' fill='#0477BF' /><circle cx='110' cy='48' r='1.25' fill='#0477BF' /><circle cx='117' cy='46' r='1.25' fill='#0477BF' /><circle cx='123' cy='47' r='1.25' fill='#0477BF' /><circle cx='0' cy='0' r='1.25' fill='#F25C05' /><circle cx='6' cy='10' r='1.25' fill='#F25C05' /><circle cx='13' cy='12' r='1.25' fill='#F25C05' /><circle cx='19' cy='10' r='1.25' fill='#F25C05' /><circle cx='26' cy='10' r='1.25' fill='#F25C05' /><circle cx='32' cy='7' r='1.25' fill='#F25C05' /><circle cx='39' cy='2' r='1.25' fill='#F25C05' /><circle cx='58' cy='12' r='1.25' fill='#F25C05' /><circle cx='45' cy='6' r='1.25' fill='#F25C05' /><circle cx='52' cy='7' r='1.25' fill='#F25C05' /><circle cx='150' cy='42' r='1.75' fill='white' stroke='#0477BF' stroke-width='1.25' /></svg>",
    correctIcons: ["incon","lowimp"],
    explanation: "Will not consistently pass or fail the target if nothing changes; Special cause of improving nature or lower pressure due to Lower values.",
    direction: "Lower is better"
  },
    {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,22 143,22 136,22 130,22 123,22 117,22 110,22 104,22 97,22 91,22 84,22 78,22 71,22 65,22 58,22 52,22 45,22 39,22 32,22 26,22 19,22 13,22 6,22 0,22' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,35 143,35 136,35 130,35 123,35 117,35 110,35 104,35 97,35 91,35 84,35 78,35 71,35 65,35 58,35 52,35 45,35 39,35 32,35 26,35 19,35 13,35 6,35 0,35' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,50 143,50 136,49 130,48 123,46 117,44 110,43 104,40 97,39 91,38 6,39 0,38' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,28 143,28 136,28 130,28 123,28 117,28 110,28 104,28 97,28 91,28 84,28 78,28 71,28 65,28 58,28 52,28 45,28 39,28 32,28 26,28 19,28 13,28 6,28 0,28' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,41 143,41 136,41 130,38 123,37 117,38 110,40 104,39 97,37 91,36 84,39 78,36 71,34 65,33 58,31 52,29 45,26 39,18 32,17 26,14 19,9 13,3 6,1 0,0' stroke-linecap='round' stroke-linejoin='round' /><circle cx='97' cy='37' r='1.25' fill='#0477BF' /><circle cx='136' cy='41' r='1.25' fill='#0477BF' /><circle cx='91' cy='36' r='1.25' fill='#0477BF' /><circle cx='104' cy='39' r='1.25' fill='#0477BF' /><circle cx='130' cy='38' r='1.25' fill='#0477BF' /><circle cx='143' cy='41' r='1.25' fill='#0477BF' /><circle cx='110' cy='40' r='1.25' fill='#0477BF' /><circle cx='117' cy='38' r='1.25' fill='#0477BF' /><circle cx='123' cy='37' r='1.25' fill='#0477BF' /><circle cx='0' cy='0' r='1.25' fill='#F25C05' /><circle cx='6' cy='1' r='1.25' fill='#F25C05' /><circle cx='78' cy='36' r='1.25' fill='#0477BF' /><circle cx='26' cy='14' r='1.25' fill='#F25C05' /><circle cx='32' cy='17' r='1.25' fill='#F25C05' /><circle cx='39' cy='18' r='1.25' fill='#F25C05' /><circle cx='19' cy='9' r='1.25' fill='#F25C05' /><circle cx='13' cy='3' r='1.25' fill='#F25C05' /><circle cx='45' cy='26' r='1.25' fill='#0477BF' /><circle cx='84' cy='39' r='1.25' fill='#0477BF' /><circle cx='52' cy='29' r='1.25' fill='#0477BF' /><circle cx='58' cy='31' r='1.25' fill='#0477BF' /><circle cx='65' cy='33' r='1.25' fill='#0477BF' /><circle cx='71' cy='34' r='1.25' fill='#0477BF' /><circle cx='150' cy='41' r='1.75' fill='white' stroke='#0477BF' stroke-width='1.25' /></svg>",
    correctIcons: ["fail","lowimp"],
    explanation: "Will consistently fail the target if nothing changes; Special cause of improving nature or lower pressure due to Lower values.",
    direction: "Lower is better"
  },
    {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,0 136,0 122,0 109,0 95,0 81,0 68,0 54,0 40,0 27,0 13,0 0,0' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,41 136,41 122,41 109,41 95,41 81,41 68,41 54,41 40,41 27,41 13,41 0,41' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,50 136,50 122,50 109,50 95,50 81,50 68,50 54,50 40,50 27,50 13,50 0,50' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,21 136,21 122,21 109,21 95,21 81,21 68,21 54,21 40,21 27,21 13,21 0,21' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,37 136,42 122,20 109,25 95,22 81,8 68,13 54,20 40,13 27,8 13,18 0,20' stroke-linecap='round' stroke-linejoin='round' /><circle cx='81' cy='8' r='1.25' fill='#0477BF' /><circle cx='68' cy='13' r='1.25' fill='#0477BF' /><circle cx='54' cy='20' r='1.25' fill='#0477BF' /><circle cx='40' cy='13' r='1.25' fill='#0477BF' /><circle cx='27' cy='8' r='1.25' fill='#0477BF' /><circle cx='13' cy='18' r='1.25' fill='#0477BF' /><circle cx='0' cy='20' r='1.25' fill='#0477BF' /><circle cx='136' cy='42' r='1.25' fill='#F25C05' /><circle cx='109' cy='25' r='1.25' fill='#8E99A1' /><circle cx='122' cy='20' r='1.25' fill='#8E99A1' /><circle cx='95' cy='22' r='1.25' fill='#8E99A1' /><circle cx='150' cy='37' r='1.75' fill='white' stroke='#8E99A1' stroke-width='1.25' /></svg>",
    correctIcons: ["pass","comcause"],
    explanation: "Will consistently pass the target if nothing changes; Common cause - no significant change.",
    direction: "Higher is better"
  },
      {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,12 143,12 136,12 129,12 122,12 115,12 109,12 102,12 95,12 88,12 81,12 75,12 68,12 61,12 54,12 47,12 40,12 34,12 27,12 20,12 13,12 6,12 0,12' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,42 143,42 136,42 129,42 122,42 115,42 109,42 102,42 95,42 88,42 81,42 75,42 68,42 61,42 54,42 47,42 40,42 34,42 27,42 20,42 13,42 6,42 0,42' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,18 143,18 136,18 129,18 122,18 115,18 109,18 102,18 95,18 88,18 81,18 75,18 68,24 61,24 54,24 47,33 40,33 34,33 27,43 20,43 13,43 6,24 0,24' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,27 143,27 136,27 129,27 122,27 115,27 109,27 102,27 95,27 88,27 81,27 75,27 68,27 61,27 54,27 47,27 40,27 34,27 27,27 20,27 13,27 6,27 0,27' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,43 143,29 136,31 129,22 122,26 115,15 109,11 102,8 95,9 88,0 81,2 75,6 68,12 61,8 54,19 47,36 40,45 34,50 27,50 20,46 13,47 6,50 0,49' stroke-linecap='round' stroke-linejoin='round' /><circle cx='34' cy='50' r='1.25' fill='#F25C05' /><circle cx='47' cy='36' r='1.25' fill='#F25C05' /><circle cx='40' cy='45' r='1.25' fill='#F25C05' /><circle cx='6' cy='50' r='1.25' fill='#F25C05' /><circle cx='0' cy='49' r='1.25' fill='#F25C05' /><circle cx='27' cy='50' r='1.25' fill='#F25C05' /><circle cx='20' cy='46' r='1.25' fill='#F25C05' /><circle cx='13' cy='47' r='1.25' fill='#F25C05' /><circle cx='115' cy='15' r='1.25' fill='#0477BF' /><circle cx='129' cy='22' r='1.25' fill='#0477BF' /><circle cx='122' cy='26' r='1.25' fill='#0477BF' /><circle cx='109' cy='11' r='1.25' fill='#0477BF' /><circle cx='102' cy='8' r='1.25' fill='#0477BF' /><circle cx='95' cy='9' r='1.25' fill='#0477BF' /><circle cx='88' cy='0' r='1.25' fill='#0477BF' /><circle cx='81' cy='2' r='1.25' fill='#0477BF' /><circle cx='75' cy='6' r='1.25' fill='#0477BF' /><circle cx='68' cy='12' r='1.25' fill='#0477BF' /><circle cx='61' cy='8' r='1.25' fill='#0477BF' /><circle cx='54' cy='19' r='1.25' fill='#0477BF' /><circle cx='143' cy='29' r='1.25' fill='#8E99A1' /><circle cx='136' cy='31' r='1.25' fill='#8E99A1' /><circle cx='150' cy='43' r='1.75' fill='white' stroke='#F25C05' stroke-width='1.25' /></svg>",
    correctIcons: ["incon","lowcon"],
    explanation: "Will not consistently pass or fail the target if nothing changes; Special cause of concerning nature or higher pressure due to Lower values.",
    direction: "Higher is better"
  },
{
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 160 60'><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,27 143,27 136,27 130,27 123,27 117,27 110,27 104,27 97,27 91,27 84,27 78,27 71,27 65,27 58,27 52,27 45,27 39,27 32,27 26,27 19,27 13,27 6,27 0,27' /><polyline fill='none' stroke='#8E99A1' stroke-width='0.5' stroke-dasharray='2,2' points='150,50 143,50 136,50 130,50 123,50 117,50 110,50 104,50 97,50 91,50 84,50 78,50 71,50 65,50 58,50 52,50 45,50 39,50 32,50 26,50 19,50 13,50 6,50 0,50' /><polyline fill='none' stroke='#DA291C' stroke-width='0.5' points='150,0 143,0 136,0 130,0 123,0 117,0 110,0 104,0 97,0 91,0 84,0 78,0 71,0 65,0 58,0 52,0 45,0 39,0 32,0 26,0 19,0 13,0 6,0 0,0' /><polyline fill='none' stroke='#FFC649' stroke-width='0.5' stroke-dasharray='2,2' points='150,39 143,39 136,39 130,39 123,39 117,39 110,39 104,39 97,39 91,39 84,39 78,39 71,39 65,39 58,39 52,39 45,39 39,39 32,39 26,39 19,39 13,39 6,39 0,39' /><polyline fill='none' stroke='#B3BBC1' stroke-width='1.25' points='150,32 143,35 136,26 130,33 123,29 117,39 110,35 104,34 97,32 91,34 84,43 78,47 71,45 65,49 58,44 52,43 45,46 39,41 32,44 26,36 19,41 13,36 6,40 0,42' stroke-linecap='round' stroke-linejoin='round' /><circle cx='130' cy='33' r='1.25' fill='#0477BF' /><circle cx='136' cy='26' r='1.25' fill='#0477BF' /><circle cx='123' cy='29' r='1.25' fill='#0477BF' /><circle cx='78' cy='47' r='1.25' fill='#F25C05' /><circle cx='71' cy='45' r='1.25' fill='#F25C05' /><circle cx='65' cy='49' r='1.25' fill='#F25C05' /><circle cx='58' cy='44' r='1.25' fill='#F25C05' /><circle cx='32' cy='44' r='1.25' fill='#F25C05' /><circle cx='84' cy='43' r='1.25' fill='#F25C05' /><circle cx='39' cy='41' r='1.25' fill='#F25C05' /><circle cx='52' cy='43' r='1.25' fill='#F25C05' /><circle cx='45' cy='46' r='1.25' fill='#F25C05' /><circle cx='13' cy='36' r='1.25' fill='#8E99A1' /><circle cx='26' cy='36' r='1.25' fill='#8E99A1' /><circle cx='19' cy='41' r='1.25' fill='#8E99A1' /><circle cx='6' cy='40' r='1.25' fill='#8E99A1' /><circle cx='0' cy='42' r='1.25' fill='#8E99A1' /><circle cx='97' cy='32' r='1.25' fill='#8E99A1' /><circle cx='91' cy='34' r='1.25' fill='#8E99A1' /><circle cx='110' cy='35' r='1.25' fill='#8E99A1' /><circle cx='117' cy='39' r='1.25' fill='#8E99A1' /><circle cx='104' cy='34' r='1.25' fill='#8E99A1' /><circle cx='143' cy='35' r='1.25' fill='#8E99A1' /><circle cx='150' cy='32' r='1.75' fill='white' stroke='#8E99A1' stroke-width='1.25' /></svg>",
    correctIcons: ["fail","comcause"],
    explanation: "Will consistently fail the target if nothing changes; Common cause - no significant change.",
    direction: "Higher is better"
  }
];

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
window.onload = function() {
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

