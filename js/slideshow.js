$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(4000)
    .end()
    .appendTo('#slideshow');
},  5000);