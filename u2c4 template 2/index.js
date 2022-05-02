// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",match)
var matchArr = JSON.parse(localStorage.getItem("schedule"))||[]
function match(){
    event.preventDefault();

    
    var matchObj = {
        matchnumber:  masaiForm.matchNum.value,
        matchteamA:   masaiForm.teamA.value,
        matchteamB:   masaiForm.teamB.value,
        matchdata:    masaiForm.date.value,
        matchvenue:   masaiForm.venue.value
    }
    matchArr.push(matchObj)
    console.log(matchArr);
    localStorage.setItem("schedule",JSON.stringify(matchArr));
    window.location.href = "matches.html"
}