// write js code here corresponding to favourites.html
var favArr = JSON.parse(localStorage.getItem("favourites"));
console.log(favArr)
displayData(favArr);
function displayData(data){
    data.forEach(function(elem,index){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerText = elem.matchnumber;
        var td2 = document.createElement("td")
        td2.innerText =elem.matchteamA;
        var td3 = document.createElement("td")
        td3.innerText = elem.matchteamB;
        var td4 = document.createElement("td")
        td4.innerText = elem.matchdate
        var td5 = document.createElement("td");
        td5.innerText = elem.matchvenue;
        var td6 = document.createElement("td")
        td6.innerText = "Delete"
        td6.style.color = "red"
        td6.style.cursor = "pointer";
        td6.addEventListener("click",function(){
            deleteItem(elem,index)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
        
    })
    
}
function deleteItem(elem,index){
    favArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.reload()
}
