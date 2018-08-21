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

function init(){
  chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([rule]);
    });
  });
}

// Start the app
init();