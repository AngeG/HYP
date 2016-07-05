<?php

   
    // Do whatever you want with the $uid
    $var = $_POST['categoria'];
    
    // apro la connessione col database
    $conn = new mysqli("localhost", "root", "root", "timdb");
    $sql = 'select nome, prezzo, desc_breve, imm from dispositivo as d join immagine as i on d.cod_disp = i.cod_prop where categoria ='.$var.' && tipo = "prim"';
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
         $devices[] = base64_encode( $row['imm'] );
         $devices[] = '<p class="devicename">'.$row["nome"]."</p>";
         $devices[] = '<p class="devicedescription">'.$row["desc_breve"]."</p>";
         $devices[] = '<p class="deviceprice">'.$row["prezzo"]."€</p>";
    }
    
    $products = '' ;
                        
    $j=0;
                        
    for($i = 0; $i < count($devices) ;$i++ ){
        if($j==0){
            $products .= '<a href="#"  class="device_button" rel=';
            $products .= "'".$devices[$i+1]."'";
            $products .= ' ><div class="device_tile">';
            $products .= '<div class="tile_el'.$j.'">'.'<img src="data:image/jpeg;base64,'.$devices[$i].'"/>'.'</div>';
            $j++;
        }else{
            $products .= '<div class="tile_el'.$j.'">'.$devices[$i].'</div>';
            if($j==3){
                $j=0;
                $products .= '</div></a>';
            }else{
                $j++;
            }
        }
    }
    $conn->close();
    

    echo $products;
?>
