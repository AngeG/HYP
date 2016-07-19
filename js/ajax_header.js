$(function(){
    
    $.ajax({
        
        url: './php/ajax_header.php',
        type:'POST',
        data: { 'header' : 'valore',},
        
        success: function(header){
            if(header == undefined || !header || header == null){
                $('#headernav').html("impossibile caricare header");
            }else{
                $('#headernav').html(header);
            }
        }
    });
    
});