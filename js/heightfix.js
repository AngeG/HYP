
$(window).on('load', function() {
   var height  = jQuery('#mainsection').outerHeight(true) +10;

    height += 30;
                
    $('.centerGrid').css("height", "+="+height + "px");
    $('#sidebar').css("height", height + "px");
    $('body').css("height","+="+ 20 + "px");
});
    
