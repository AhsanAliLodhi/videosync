// 
// 
// 

'use strict';
// If the page has atleast 1 video tag
var condition = new chrome.declarativeContent.PageStateMatcher({css: ["video"]}); 

// Then show the pageAction on this page
var rule = {
  conditions: [condition],
  actions: [ new chrome.declarativeContent.ShowPageAction() ]
};

function initAuthListener(){
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.api_info != null){
        chrome.storage.sync.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });
        sendResponse({farewell: "api_info saved"});
      }
      sendResponse({farewell: "api_info saving failed"});
    });
}
function init(){
  chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([rule]);
    });
  });
  initAuthListener();
}

// Start the app
init();