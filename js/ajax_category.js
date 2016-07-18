
         $(window).on('load', function() {
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
             
                    var cat = QueryString.cat;
                
                    var rel =  "'"+ cat + "'";
                    $('head title').html("Tim - "+ cat);
                    
                   $(function(){
                            $('#wrapper_title #nomecat  p').html(QueryString.cat);

                            $.ajax({
                                type: "POST",
                                url: './php/ajax_category.php',
                                data: { "categoria" : rel,},

                                success: function(data){
                                    if (data == undefined || !data || data == null){
                                        $('#products_section').html("Error there's no product in database for this category");
                                    }else{
                                        $('#products_section').html(data);
                                    }
                                }
                            });
                    }); 
               
                });
       
     