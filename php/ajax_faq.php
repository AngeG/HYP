<?php
    if(isset($_POST['faq'])){
        $header = file_get_contents('../html/musicfaq.html', FILE_USE_INCLUDE_PATH);
        echo $header ;
    }
?>