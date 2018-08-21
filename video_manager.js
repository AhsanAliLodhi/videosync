function videoManager(video){
    var vm = this;
    vm.video = video;

    vm.playpause = function(){
        var video = vm.video;
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    }
}