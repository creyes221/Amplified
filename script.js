// JavaScript Document gooooooo
$(document).ready(function(){
		  
	var ssound = new Howl({
	    urls: ['sounds/rock-tube.mp3']
	  })
	  
	var tsound = new Howl({
	    urls: ['sounds/rock-ss.mp3']
	  })
	  
	  var sstate = 0;
	  var tstate = 0;
	  var tpos, spos;
	  
	$('#tbut').click(function() {
	  tpos = ssound.pos();
	  
	  if(tstate == 0 | tpos == 0){
	    tsound.pause();
      ssound.play();
      tstate = 1
      sstate = 0
      /*if(pos == 24){
        tstate = 0
      }*/
      //24.5
	  }
	  
	  else if(tstate == 1){
	    ssound.pause();
	    tstate = 0
	  }
	  
	})
	
	$('#ssbut').click(function() {
	  spos = tsound.pos();
	  if(sstate == 0 | spos == 0){
	    ssound.pause();
      tsound.play();
      sstate = 1
      tstate = 0
	  }
	  
	  else if(sstate == 1){
	    tsound.pause();
	    sstate = 0
	  }
	  
	})
	//var winHeight = $(window).height();
	//$('.splash').css("height", winHeight+'px');
	
});
