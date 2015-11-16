function ajaxCall() {
	var ajax1 = $.ajax({
		url: "http://blockchain.info/ticker",
		dataType: 'json',
		success: function(data){
			var usd = (data.USD.last).toFixed(2);
			var eur = (data.EUR.last).toFixed(2);
			var gbp = (data.GBP.last).toFixed(2);
			var cny = (data.CNY.last).toFixed(2);
			$('#usd-result').html('$' + usd);
			$('#eur-result').html('<i class="fa fa-eur"></i>' + eur);
			$('#gbp-result').html('<i class="fa fa-gbp"></i>' + gbp);
			$('#cny-result').html('CNY ' + cny);
			//set title to USD
			$('title').html('$'+usd);
		}
	});
}

ajaxCall();

setInterval(ajaxCall, 30000)