// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details) {
  //  if(details.reason == "install"){
        window.open("/options.html");
});
