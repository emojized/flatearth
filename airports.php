<?php

$json_airports = json_decode(file_get_contents("airports.json"),true);

echo '<pre>';

foreach ($json_airports as $key => $airport)
{
   echo "$key=>";
    $airport["lat"] = ($airport["lat"] / 0.09628985); 
    $json_airports[$key]["lat"] = $airport["lat"];
    $airport["lon"] = ($airport["lon"] / -(0.122612)); 
    $json_airports[$key]["lon"] = $airport["lon"];
}
    var_dump($json_airports);

file_put_contents("airports_flat.json", json_encode($json_airports));
echo '</pre>';