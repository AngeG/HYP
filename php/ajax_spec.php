<?php
    $var = $_POST['prod'];
    //$var = 'iPhone 6s Plus 64GB';
    
    // apro la connessione col database
    $conn = new mysqli("localhost", "root", "root", "timdb");
    $sql1 = 'select marca, processore, memoria, fotocamera, sensori, colori, so, connettivita, display from dispositivo where nome='.$var;
    
    $result1 = $conn->query($sql1);
    
    $row1 = $result1->fetch_assoc();
    if($row1['marca'] == ''){
        $specifiche = "   Non sono ancora state inserite le specifiche tecniche di prodotto nel db, si consiglia di guardare iPhone.";
    }else{
        $specifiche =  '<table>
            <tr><td class="spec">Marca:</td><td>'.$row1['marca'].'</td></tr>
            <tr><td class="spec">Processore:</td><td>'.$row1['processore'].'</td></tr>
            <tr><td class="spec">Memoria:</td><td>'.$row1['memoria'].'</td></tr>
            <tr><td class="spec">Fotocamera:</td><td>'.$row1['fotocamera'].'</td></tr>
            <tr><td class="spec">Sensori:</td><td>'.$row1['sensori'].'</td></tr>
            <tr><td class="spec">Colori:</td><td>'.$row1['colori'].'</td></tr>
            <tr><td class="spec">Sistema Operativo:</td><td>'.$row1['so'].'</td></tr>
            <tr><td class="spec">Connettività:</td><td>'.$row1['connettivita'].'</td></tr>
            <tr><td class="spec">Display:</td><td>'.$row1['display'].'</td></tr>
        </table>';
    }    
    $conn->close();

    echo $specifiche;

?>