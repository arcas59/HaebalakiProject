
 var audio=document.createElement('audio');
 var first=true;
      window.addEventListener('mousedown',onmousedown);
 
    function onmousedown(){
       if(!first) return;
       first=false;
       audio.src="media/bonjour.mp3";
       audio.play();
    }