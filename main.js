var touristLog = [];
function logTourist(){
    var brLog = touristLog.join("<br>");
    touristLog.push(document.getElementById("addTouristInput").value);
    document.getElementById("touristNamesOnceLogged").innerHTML = brLog;
    console.log(touristLog);
    console.log("User added a tourist to the array. Tourist's name is " + document.getElementById("addTouristInput").value);
}
function displayLog(){
    var brDisplay = touristLog.join("<br>");
    document.getElementById("displayTouristsH4").innerHTML = brDisplay;
    console.log("User displayed log. This is what is displayed on screen:");
    console.log(touristLog);
}
function sortLog(){
    var brSort = touristLog.join("<br>");
    touristLog.sort();
    document.getElementById("displayTouristsH4").innerHTML = brSort;
    console.log("User sorted the array displayed. What's on screen:");
    console.log(touristLog);
}
function searchLog(){
    var a = document.getElementById("searchLog").value;
    var timesFound = 0;
    var b;
    for(b = 0; b < touristLog.length; b++){
        if(a==touristLog[b]){
            timesFound = timesFound + 1;
        }
    }
    document.getElementById("timesFound").innerHTML = "Tourist found "+ timesFound + " time/s.";
    console.log("User searched for tourist named " + document.getElementById("timesFound") + ". This tourist was found " + timesFound + " time/s");
}