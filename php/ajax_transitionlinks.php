<?php 
    $var = $_POST['prod'];
    //$var = 'iPhone 6s Plus 64GB';
// apro la connessione col database
    $conn = new mysqli("localhost", "root", "root", "timdb");
    $sql1 = 'select servizi from dispositivo where nome="'.$var.'"';
    
    $result1 = $conn->query($sql1);
    
    $row1 = $result1->fetch_assoc();
    $services = $row1['servizi'];
    
    $conn->close();


    echo $services;

?>