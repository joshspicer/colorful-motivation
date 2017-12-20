// http://joshspicer.com/

// Saves options to chrome.storage
function save_options() {
  // var color = document.getElementById('color').value;
  // var likesColor = document.getElementById('like').checked;

  var m = document.getElementById('m').value;
  var d = document.getElementById('d').value;
  var y = document.getElementById('y').value;
  var hr = document.getElementById('hr').value;
  var min = document.getElementById('min').value;

  chrome.storage.sync.set({
    month: m,
    day: d,
    year: y,
    hour: hr,
    minute: min
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });

  window.location = "./index.html"; //TODO maybe change this?
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default values.
  chrome.storage.sync.get({
    month: "Jan",
    day: 1,
    year:1980,
    hour: 12,
    minute: 00
  }, function(items) {
    document.getElementById('m').value = items.month;
    document.getElementById('d').value = items.day;
    document.getElementById('y').value = items.year;
    document.getElementById('hr').value = items.hour;
    document.getElementById('min').value = items.minute;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('save').addEventListener('click',
    save_options);
