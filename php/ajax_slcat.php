<?php

    $var = $_POST['cat'];
    // apro la connessione col database
    $conn = new mysqli("localhost", "root", "root", "timdb");
    $sql = 'select nome, prezzo, desc_breve, imm from sl as sl join immagine as i on sl.codsl = i.cod_prop where categoria ='.$var.' && tipo = "prim"';
    $result = $conn->query($sql);


    while($row = $result->fetch_assoc()){
         $sl[] = base64_encode( $row['imm'] );
         $name = $row['nome'];
         $sl[] = '<p class="devicename">'.$name."</p>";
         $names[] = $name;
         $sl[] = '<p class="devicedescription">'.$row["desc_breve"]."</p>";
         $sl[] = '<p class="deviceprice">'.$row["prezzo"]."</p>";
    }
    
    $sls = '';
                        
    $j=0;
    $k = 0;
    if( count($sl) == 0){  
        $sls = "non presente";
    }else{
        for($i = 0; $i < count($sl) ;$i++ ){
            if($j==0){
                $str = substr($var,1, strlen($var)-2);
                
                if($names[$k] == 'TIM MUSIC'){
                    $sls .= '<a href="slmusic.html?cat='.$str.'&sl=';
                    $sls .= $names[$k];
                    $sls .= '" rel="';
                    $sls .= $names[$k];
                    $sls .= '"';
                }else{
                    $sls .= '<a onclick="allerta()" href="slcategoria.html?cat='.$str.'"';
                }
               
                
                $sls .=' id="sl" class="device_button"><div class="device_tile">';
                $sls .= '<div class="tile_el'.$j.'">'.'<img src="data:image/jpeg;base64,'.$sl[$i].'"/>'.'</div>';
                $j++;
            }else{
                $sls .= '<div class="tile_el'.$j.'">'.$sl[$i].'</div>';
                if($j==3){
                    $j=0;
                    $k++;
                    $sls .= '</div></a>';
                }else{
                    $j++;
                }
            }
        }
    }
    
    $conn->close();
    

    echo $sls;
?>
