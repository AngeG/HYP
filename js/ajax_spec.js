
                                            
$(document).ready(function(){
    $("#specbtn").on('click', function(e){
        e.preventDefault();

                                var product = $('#mainsection #centerCont').text();
                                var name =  "'" + product + "'";

                                $.ajax({

                                        type: "POST",
                                        url: './php/ajax_spec.php',
                                        data: { 'prod' : name,},

                                        success: function(data){
                                      
                                            
                                            $('#cont').html(data);
                                            

                                            $('#specbtn').css('color', 'black');
                                            $('#specbtn').css('border-bottom', '3px solid black');

                                            $('#descbtn').css('color', '#00b8e6');
                                            $('#descbtn').css('border-bottom', '3px solid #e6f9ff');
                                        }

                                    });

    });

});

    