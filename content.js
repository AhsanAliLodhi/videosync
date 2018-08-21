//Do stuff on playpause action from popup
function playpause(video){
    video.playpause();
    console.log("playpause action clicked!")
}

//initialize all listeners
function iniListener(video){
    return function (request, sender, sendResponse){
        var action = request.message;
        if(action=="videosync_playpause"){
            playpause(video);
        }
    }
}

// Init
function init(){
    firstVideo = document.getElementsByTagName('video')[0];
    video = new videoManager(firstVideo);
    console.log("Initiating VideoSync.. Welcome");
    chrome.runtime.onMessage.addListener(iniListener(video));
}

//Start
init();