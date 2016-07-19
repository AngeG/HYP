
    $(document).ready(function(){
        
                    var QueryString = function () {
                      // This function is anonymous, is executed immediately and 
                      // the return value is assigned to QueryString!
                      var query_string = {};
                      var query = window.location.search.substring(1);
                      var vars = query.split("&");
                      for (var i=0;i<vars.length;i++) {
                        var pair = vars[i].split("=");
                            // If first entry with this name
                        if (typeof query_string[pair[0]] === "undefined") {
                          query_string[pair[0]] = decodeURIComponent(pair[1]);
                            // If second entry with this name
                        } else if (typeof query_string[pair[0]] === "string") {
                          var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
                          query_string[pair[0]] = arr;
                            // If third or later entry with this name
                        } else {
                          query_string[pair[0]].push(decodeURIComponent(pair[1]));
                        }
                      } 
                      return query_string;
                    }();
                    var product = QueryString.prod; 
                    var cat  = QueryString.cat;
                    var ph = QueryString.ph;
        
                    
                    if(ph == 'slmusic'){
                        $('#xind').html('<div id="transition"><a></a></div>');
                        $("#transition a").html("< Indietro");
                        $("#transition a").attr("href", "slmusic.html?cat=TV%20e%20Entertainment");
                         
                    }else{
                        if(ph == 'offrat'){
                            $('#xind').html('<div id="transition"><a></a></div>');
                            $("#transition a").html("< Indietro");
                            $("#transition a").attr("href", "offerteraiteztransition.html");
                        }else{
                            if(ph== 'screen') {
                                $('#xind').html('<div id="transition"><a></a></div>');
                                $("#transition a").html("< Indietro");
                                $("#transition a").attr("href", "screentranstion.html");
                            } 
                        }
                    }
            
                    $('head title').html("Tim - Prodotti, " + product);
                    if(  cat == "promo"){
                        $("#cat").attr("href", "promo.html");
                        $("#cat").html("Promozioni");
                    }else{
                        $("#cat").attr("href", "prodotticategoria.html?cat=" + QueryString.cat.substring(1,QueryString.cat.length-1));
                        $("#cat").html(QueryString.cat.substring(1,QueryString.cat.length-1));
                    }
                    
                    $('#mainsection #titolonomedisp').html(product);
                    
        
                   $(function(){
                            var product = QueryString.prod; 
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
                                }
                                
                            });
                       
                            $.ajax({
                                
                                type: "POST",
                                url: './php/ajax_transitionlinks.php',
                                data: { 'prod' : product ,},
                               

                                success: function(data){
                                    
                                    if (data == null){
                                        $('#transitionlinks').html("Non ci sono transition link per questo prodotto");
                                    }else{
                        
                                        $('#transitionlinks').html(data);
                                        $('#transitionlinks').ready( function(){
                                            var height  = jQuery('#mainsection').outerHeight(true) +10;
                                           
                                            height += 30 + 50;

                                            $('.centerGrid').css("height",height + "px");
                                            $('#sidebar').css("height", height-50 + "px");
                                            $('body').css("height","+="+ 20 + "px");
                                            
                                        });
                                    }
                                }
                                
                            });
                    }); 
        
        
                    
        });