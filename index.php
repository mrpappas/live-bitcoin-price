	

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="refresh" content="<?php echo $sec?>;URL='<?php echo $page?>'">

    <title></title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	
	<link rel="icon" 
      type="image/ico" 
      href="http://www.bitcoin-exchange-berlin.com/favicon.ico">


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
		
			<div class="btn-group btn-group-lg" data-toggle="buttons">
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
				
				<h2 id="usd-result"></h2>
				
			
				 <h3><small>US Dollar</small></h3> 

			</div>	 
			<!--euro-->	 
			<div id="eur-data"  class="collapse panel panel-default">	 
				 
				<h2 id="eur-result"></h2>	 
				
				 <h3><small>Euro</small></h3>

			</div>	 
			<!--GBP-->	 
			<div id="gbp-data"  class="collapse panel panel-default">	 
				 
				<h2 id="gbp-result"></h2>	 
				
				 <h3><small>Brittish Pound Sterling</small></h3>

			</div>	 
			<!--CNY-->	 
			<div id="cny-data" class="collapse panel panel-default">	 
				 
				<h2 id="cny-result"></h2>	 
				
				 <h3><small>Chinese Yuan Renminbi</small></h3>
			</div>

			
			
		</div>

	</div>

		<footer align="center">
			API requests powered by <a href="http://www.coindesk.com/price/" target="_blank">CoinDesk</a>
		</footer>
	
	</div>
	
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="scripts.js"></script>

  </body>
</html>