'use strict';

let playpause = document.getElementById('playpause');
let stop = document.getElementById('stop');
let prefix = "videosync";
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.executeScript(
//       tabs[0].id,
//       {code: ''});
// });

function sendMessage(message){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": prefix+"_"+message});
  });
}
playpause.onclick = function(element) {
  sendMessage("playpause")
};