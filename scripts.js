function ajaxCall() {
	var ajax1 = $.ajax({
		url: "http://blockchain.info/ticker",
		dataType: 'json',
		success: function(data){
			var usd = (data.USD.last).toFixed(2);
			var eur = (data.EUR.last).toFixed(2);
			var gbp = (data.GBP.last).toFixed(2);
			var cny = (data.CNY.last).toFixed(2);
			var jpy = (data.JPY.last).toFixed(2);
			var cad = (data.CAD.last).toFixed(2);
			var aud = (data.AUD.last).toFixed(2);
			var chf = (data.CHF.last).toFixed(2);
			var nzd = (data.NZD.last).toFixed(2);
			var sek = (data.SEK.last).toFixed(2);
			var rub = (data.RUB.last).toFixed(2);
			var brl = (data.BRL.last).toFixed(2);
			var dollar = '<i class="fa fa-usd"></i>';
			$('#usd-result').html(dollar + usd);
			$('#eur-result').html('<i class="fa fa-eur"></i>' + eur);
			$('#gbp-result').html('<i class="fa fa-gbp"></i>' + gbp);
			$('#cny-result').html('<i class="fa fa-jpy"></i>' + cny);
			$('#jpy-result').html('<i class="fa fa-jpy"></i>' + jpy);
			$('#cad-result').html(dollar + cad);
			$('#aud-result').html(dollar + aud);
			$('#chf-result').html('CHF ' + chf);
			$('#nzd-result').html(dollar + nzd);
			$('#sek-result').html(sek + ' kr');
			$('#rub-result').html('<i class="fa fa-rub"></i>' + rub);
			$('#brl-result').html(dollar + brl);
			//set title to USD
			$('title').html('$'+usd);
		}
	});
}

ajaxCall();

setInterval(ajaxCall, 30000)