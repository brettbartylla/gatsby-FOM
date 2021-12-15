  setTimeout(function(){ 
    // console.log("Ready");
    var cardvideo = document.getElementById("cardVideo");
    cardvideo.addEventListener("mouseover", function() {
      this.play();
    });
    cardvideo.addEventListener("mouseleave", function() {
      this.pause();
    });

    var apparelvideo = document.getElementById("apparelVideo");
    apparelvideo.addEventListener("mouseover", function() {
      this.play();
    });
    apparelvideo.addEventListener("mouseleave", function() {
      this.pause();
    });

}, 2300);