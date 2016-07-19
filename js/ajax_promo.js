  $(window).on('load', function() {
                   
                   $(function(){

                            $.ajax({
                                type: "POST",
                                url: './php/ajax_promo.php',
                                data: { "promo" : "si",},

                                success: function(data){
                                    
                                    if (data == undefined || !data || data == null){
                                        $('#products_section').html("Error there's no product in database for this category");
                                    }else{
                                        $('#products_section').html(data);
                                    }
                                    
                                    $('#products_section').ready(function(){
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
       
     