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
             } else if (typeof query_string[pair[0]] ===       "string") {
                  var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
            query_string[pair[0]] = arr;
             // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        } 
        return query_string;
    }();
    
    var slcat = QueryString.cat; 
        
    $('head title').html("Tim - SL, " + slcat);
    
    $('#mainsection #nomecat p ').html(slcat);
    
    
    
    $(function(){
        var namecat =  "'" + slcat + "'";
         
        $.ajax({
                                
            type: "POST",
            url: './php/ajax_slcat.php',
            data: { 'cat' : namecat,},


            success: function(data){
                
                if (data == 'non presente'){
                    $('#mainsection').html("Non sono presenti nel db servizi Smart Life per questa categoria. si suggerisce di guardare TV e Enterteinment che è presente sul db");
                    alert("sul db non sono presenti Servici SL per la categoria selezionata. Si consiglia TV e Enterainment che è presente.");
                }else{
                    $('#sl_section').html(data);
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
    });
});