function ajaxCall() {
	var ajax1 = $.ajax({
		url: "https://api.coindesk.com/v1/bpi/currentprice.json",
		dataType: 'json',
		success: function(data){
			var usd = (data.bpi.USD.rate_float).toFixed(2);
			var eur = (data.bpi.EUR.rate_float).toFixed(2);
			var gbp = (data.bpi.GBP.rate_float).toFixed(2);
			$('#usd-result').html('$' + usd);
			$('#eur-result').html('<i class="fa fa-eur"></i>' + eur);
			$('#gbp-result').html('<i class="fa fa-gbp"></i>' + gbp);
			//set title to USD
			$('title').html('$'+usd);
		}
	});
	var ajax2 = $.ajax({
		url: "https://api.coindesk.com/v1/bpi/currentprice/CNY.json",
		dataType: 'json',
		success: function(data){
			var cny = (data.bpi.CNY.rate_float).toFixed(2);
			$('#cny-result').html('CNY ' + cny);
		}
	});
}

ajaxCall();

setInterval(ajaxCall, 15000)