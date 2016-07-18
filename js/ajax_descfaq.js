$(document).ready(function(){
    $("#descbtn").on('click', function(e){
        e.preventDefault();
        $.ajax({

            url: './php/ajax_descsl.php',
            type:'POST',
            data: { 'desc' : 'val',},

            success: function(desc){
                if(desc == undefined || !desc || desc == null){
                    $('#cont').html("impossibile caricare faq problema col server");
                }else{
                    $('#cont').html(desc);
                }

                $('#descbtn').css('color', 'black');
                $('#descbtn').css('border-bottom', '3px solid black');

                $('#faqbtn').css('color', '#00b8e6');
                $('#faqbtn').css('border-bottom', '3px solid #e6f9ff');
             
                
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