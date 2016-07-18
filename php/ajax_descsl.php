<?php
    if(isset($_POST['desc'])){
        $header = file_get_contents('../html/musicdesc.html', FILE_USE_INCLUDE_PATH);
        echo $header ;
    }
?>