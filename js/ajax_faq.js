$(document).ready(function(){
    $("#faqbtn").on('click', function(e){
        e.preventDefault();
        $.ajax({

            url: './php/ajax_faq.php',
            type:'POST',
            data: { 'faq' : 'val',},

            success: function(faq){
                if(faq == undefined || !faq || faq == null){
                    $('#cont').html("impossibile caricare faq problema col server");
                }else{
                    $('#cont').html(faq);
                }

                $('#faqbtn').css('color', 'black');
                $('#faqbtn').css('border-bottom', '3px solid black');

                $('#descbtn').css('color', '#00b8e6');
                $('#descbtn').css('border-bottom', '3px solid #e6f9ff');
                    
                $('#cont').ready(function(){
                    var height  = jQuery('#mainsection').outerHeight(true) +10;

                    height += 30 + 50;

                    $('.centerGrid').css("height",height + "px");
                    $('#sidebar').css("height", height-50 + "px");
                    $('body').css("height",height + 20 + "px");
                });
            }
        });
    });
});