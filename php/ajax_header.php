<?php
    if(isset($_POST['header'])){
        $header = file_get_contents('../html/header.html', FILE_USE_INCLUDE_PATH);
        echo $header ;
    }
?>