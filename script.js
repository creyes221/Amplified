// JavaScript Document gooooooo
$(document).ready(function(){
	
	var tubeAudio = document.createElement('audio');
        tubeAudio.setAttribute('src', 'sounds/rock-tube.mp3');
        //tubeAudio.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        tubeAudio.addEventListener("load", function() {
            tubeAudio.play();
        }, true);

        $('#tbut').click(function() {
            ssAudio.pause();
			tubeAudio.play();
        });
		
	var ssAudio = document.createElement('audio');
        ssAudio.setAttribute('src', 'sounds/rock-ss.mp3');
        //tubeAudio.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        ssAudio.addEventListener("load", function() {
            ssAudio.play();
        }, true);

        $('#ssbut').click(function() {
            tubeAudio.pause();
			ssAudio.play();
        });

       // $('.pause').click(function() {
         //   audioElement.pause();
        //});
	
});