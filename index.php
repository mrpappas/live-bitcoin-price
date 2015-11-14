<?php

//get usd/euro
$a="https://api.coindesk.com/v1/bpi/currentprice.json";

$file=file_get_contents($a);
if($file==""){
	print("error:cant get 'a' file");
	return;
}
//get gbp
$b="https://api.coindesk.com/v1/bpi/currentprice/GBP.json";

$fileb=file_get_contents($b);
if($fileb==""){
	print("error:cant get 'b' file");
	return;
}
//get cny
$c="https://api.coindesk.com/v1/bpi/currentprice/CNY.json";

//page refresh
$filec=file_get_contents($c);
if($filec==""){
	print("error:cant get 'c' file");
	return;
}

//decode json files
$jsonA = json_decode($file);
$jsonB = json_decode($fileb);
$jsonC = json_decode($filec);

//usd
$usd = round($jsonA->bpi->USD->rate, 2);
$dollar = $jsonA->bpi->USD->symbol;

//eu
$eu = round ($jsonA->bpi->EUR->rate, 2);
$euro = $jsonA->bpi->EUR->symbol;

//gbp
$gbp = round ($jsonB->bpi->GBP->rate, 2);
$pound = $jsonB->bpi->GBP->code;

//cny
$cn = round($jsonC->bpi->CNY->rate_float, 2);
$cny = $jsonC->bpi->CNY->code;

//page reload
$page = $_SERVER['PHP_SELF'];
$sec = "60";
?>

		

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="refresh" content="<?php echo $sec?>;URL='<?php echo $page?>'">

    <title><?php echo $dollar . $usd;?></title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	
	<link rel="stylesheet" href="styles.css">


  </head>
  <body>
	<div class="container">
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
			<div class="navbar-header">
			  <a class="navbar-brand" href="#">
				<p>Live <i class="fa fa-btc"></i>itcoin Price</p>
			  </a>
			  <p class="navbar-text navbar-right"><a href="https://github.com/mrpappas" target="_blank">by Ben Pappas <i class="fa fa-github"></i></a></p>
			</div>
		  </div>
		</nav>
		
	<br />
	
	
	
	<div class="row" align="center">
		<div class="col-md-4 col-md-offset-4">
		
			<div class="btn-group" data-toggle="buttons">
			  <label class="btn btn-primary active" id="usd">
				<input type="checkbox" name="options" autocomplete="off" checked> USD
			  </label>
			  <label class="btn btn-primary" data-toggle="collapse" href="#eur-data" aria-expanded="false" aria-controls="eur-data">
				<input type="checkbox" name="options" id="eur" autocomplete="off"> EUR
			  </label>
			  <label class="btn btn-primary" data-toggle="collapse" href="#gbp-data" aria-expanded="false" aria-controls="gbp-data">
				<input type="checkbox" name="options" id="gbp" autocomplete="off"> GBP
			  </label>
			  <label class="btn btn-primary" data-toggle="collapse" href="#cny-data" aria-expanded="false" aria-controls="cny-data">
				<input type="checkbox" name="options" id="cny" autocomplete="off"> CNY
			  </label>
			</div>
			
			<h1>1 <i class="fa fa-btc"></i>itcoin :</h1>
			
			<!--usd-->
			<div id="usd-data" class="panel panel-default">
				
				<h2>
					 <?php
						 echo $dollar;
						 echo $usd;
					 ?>
				</h2>
				
			
				 <h3><small>US Dollar</small></h3> 

			</div>	 
			<!--euro-->	 
			<div id="eur-data"  class="collapse panel panel-default">	 
				 
				<h2>
					 <?php
						 echo $euro;
						 echo $eu;
					 ?>
				</h2>	 
				
				 <h3><small>Euro</small></h3>

			</div>	 
			<!--GBP-->	 
			<div id="gbp-data"  class="collapse panel panel-default">	 
				 
				<h2>
					 <?php
						 echo $pound;
						 echo ' ';
						 echo $gbp;
					 ?>
				</h2>	 
				
				 <h3><small>Brittish Pound Sterling</small></h3>

			</div>	 
			<!--CNY-->	 
			<div id="cny-data" class="collapse panel panel-default">	 
				 
				<h2>
					 <?php
						 echo $cny;
						 echo ' ';
						 echo $cn;
					 ?>
				</h2>	 
				
				 <h3><small>Chinese Yuan Renminbi</small></h3>
			</div>

			<h5><small><i class="fa fa-clock-o"></i> This page will reload every 60 seconds.</small></h5>
			
		</div>

	</div>

		<footer align="center">
			API requests powered by <a href="http://www.coindesk.com/price/" target="_blank">CoinDesk</a>
		</footer>
	
	</div>
	
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

  </body>
</html>