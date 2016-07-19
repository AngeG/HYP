
//$(window).on('load', function() {
$(document).ready(function(){
   var height  = jQuery('#mainsection').outerHeight(true) +10;

    height += 30 + 50;
                
    $('.centerGrid').css("height",height + "px");
    $('#sidebar').css("height", height-50 + "px");
    $('body').css("height","+="+ 20 + "px");
});
    
