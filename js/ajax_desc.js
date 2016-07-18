$(document).ready(function(){
    $("#descbtn").on('click', function(e){
        e.preventDefault();

                                var product = $('#mainsection #centerCont').text();
                                var name =  "'" + product + "'";

 
                        
                            $.ajax({
                                
                                type: "POST",
                                url: './php/ajax_product.php',
                                data: { 'prod' : name,},
                               

                                success: function(data){
                                    
                                    if (data == undefined || data == null){
                                        $('#mainsection').html("Non ci sono i dettagli su questo prodotto nel db");
                                    }else{
                        
                                        $('#mainsection #cont').html(data);
                                        $('#mainsection').ready( function(){
                                            var height  = jQuery('#mainsection').outerHeight(true) +10;
                                           
                                            height += 30 + 50;

                                            $('.centerGrid').css("height",height + "px");
                                            $('#sidebar').css("height", height-50 + "px");
                                            $('body').css("height","+="+ 20 + "px");
                                            
                                        });
                                    }
                                    $('#specbtn').css('color', 'black');
                                            $('#descbtn').css('border-bottom', '3px solid black');
                                            $('#descbtn').css('color', 'black');

                                            $('#specbtn').css('color', '#00b8e6');
                                            $('#specbtn').css('border-bottom', '3px solid #e6f9ff');
                                }
                                
                            });
                 

    });

});
