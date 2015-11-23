
//this script controls index.html and calculator.html
//comments for index are labeled (ticker), comments for calculator (calculator), and comments for both (both)
//data from  https://blockchain.info/ticker

function ajaxCall() {
	var ajax1 = $.ajax({
		url: "ticker.json",
		dataType: 'json',
		crossDomain: true,
		success: function(data){
			//select last price (both)
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
			//append to markup in price ticker (ticker)
			$('.usd-result').html(dollar + usd);
			$('.eur-result').html('<i class="fa fa-eur"></i>' + eur);
			$('.gbp-result').html('<i class="fa fa-gbp"></i>' + gbp);
			$('.cny-result').html('<i class="fa fa-jpy"></i>' + cny);
			$('.jpy-result').html('<i class="fa fa-jpy"></i>' + jpy);
			$('.cad-result').html(dollar + cad);
			$('.aud-result').html(dollar + aud);
			$('.chf-result').html('CHF ' + chf);
			$('.nzd-result').html(dollar + nzd);
			$('.sek-result').html(sek + ' kr');
			$('.rub-result').html('<i class="fa fa-rub"></i>' + rub);
			$('.brl-result').html(dollar + brl);
			//set title to USD (both)
			$('title').html('$'+usd);
			//set default conversion rate to USD (calculator)
			$('#conversionRate').attr("value", 1 / usd);
		
			
			// when dropdown li is selected becomes default (calculator)
			$(".dropdown-menu li a").click(function(){
			  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
			  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
			
			// set seclectedCurrency to = dropdown selection (calculator)
			
			var selectedCurrency = ($(this).attr('value'));
			
			//get exchange rate and set to selectedCurrency (calculator)
			
				if (selectedCurrency == 'usd'){
				   selectedCurrency = 1 / usd;
			   } else if (selectedCurrency == 'eur'){
				   selectedCurrency = 1 / eur;
			   } else if (selectedCurrency == 'gbp'){
				   selectedCurrency = 1 / gbp;
			   } else if (selectedCurrency == 'cny'){
				   selectedCurrency = 1 / cny;
			   } else if (selectedCurrency == 'jpy'){
				   selectedCurrency = 1 / jpy;
			   } else if (selectedCurrency == 'cad'){
				   selectedCurrency = 1 / cad;
			   } else if (selectedCurrency == 'aud'){
				   selectedCurrency = 1 / aud;
			   } else if (selectedCurrency == 'chf'){
				   selectedCurrency = 1 / chf;
			   } else if (selectedCurrency == 'nzd'){
				   selectedCurrency = 1 / nzd;
			   } else if (selectedCurrency == 'sek'){
				   selectedCurrency = 1 / sek;
			   } else if (selectedCurrency == 'rub'){
				   selectedCurrency = 1 / rub;
			   } else if (selectedCurrency == 'brl'){
				   selectedCurrency = 1 / brl;
			   } 
			    
				//set conversionRate (calculator)
				$("#conversionRate").attr("value", selectedCurrency);

		});		
		
		}
	});

}

ajaxCall();

setInterval(ajaxCall, 30000);

