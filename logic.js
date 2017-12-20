// Written by Josh Spicer
// http://joshspicer.com/

//Read it using the storage API
//Default value stored here.
var arr;
chrome.storage.sync.get( {month: "Jan",
  day: 1,
  year:1980,
  hour: 12,
  minute: 00}, function(items) {
console.log('Information retrieved', items);
arr = items;
});

function calculateAge() {

  var birthday = new Date(arr['month'] + " " + arr['day'] +
                            ", " + arr['year']  + " " +  arr['hour'] +
                            ":" + arr['minute'] + ":00");
  var currentTime = new Date();
  var difference = currentTime - birthday;
  // How old am I in years (with a decimal)
  return (difference / (1000*60*60*24)) / 365.2422;
}

function displayBirthday() {
  if (arr) {
  return arr['month'] + " " + arr['day'] + ", " +
         arr['year'] + " at " + arr['hour'] + ":" + arr['minute'];
  } else {
  return "...";
  }

}

function firstHalf() {
  var age = calculateAge();
  return Math.floor(age);
}

function secondHalf() {
  var age = calculateAge();
  return (age % 1).toFixed(10).substring(2);
}


window.setInterval(function(){
  document.getElementById("firstHalf").innerHTML = firstHalf();
}, 100);

window.setInterval(function(){
  document.getElementById("secondHalf").innerHTML = secondHalf();
}, 100);

window.setInterval(function(){
  document.getElementById("colorInfo").innerHTML = "#" + secondHalf().substring(1,7);
}, 100);

window.setInterval(function(){
  // Sets background color based on my age!
  document.body.style.background = "#" + secondHalf().substring(1,7);
}, 10);

window.setInterval(function(){
  document.getElementById("birthday").innerHTML = displayBirthday();
}, 100);
