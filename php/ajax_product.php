<?php
    $var = $_POST['prod'];
    
// apro la connessione col database
    $conn = new mysqli("localhost", "root", "root", "timdb");
    $sql1 = 'select prezzo, descrizione, imm from dispositivo as d join immagine as i on d.cod_disp = i.cod_prop where nome='.$var.' && tipo = "prim" ';
    
    $result1 = $conn->query($sql1);
    
    $row1 = $result1->fetch_assoc();
    if($row1 == null){
        $device = null;
    }else{
        $device = '<div id="prodimg"> <img src="data:image/jpeg;base64,'.base64_encode( $row1['imm'] ).'"/></div>';
        $device .=  '<div id="acq"><p>Acquista ora questo prodotto ed entra nel mondo TIM!</p></div>
                    <a  id="btnacq" href="#"><div>Acquista</div></a>';
        $device .= '<div id="prezzo"> <h2>'.$row1['prezzo']."€</h2></div>";
        $device .= '<div id="desctext"><p>'.$row1["descrizione"]."</p></div>";
    }
    
    $conn->close();


    echo $device;
    

?>