//this script controls index.html and calculator.html
//data from  https://blockchain.info/ticker

var currencies = [
  ['USD', '<i class="fa fa-usd"></i>', ''],
  ['EUR', '<i class="fa fa-eur"></i>', ''],
  ['GBP', '<i class="fa fa-gbp"></i>', ''],
  ['CNY', '<i class="fa fa-jpy"></i>', ''],
  ['JPY', '<i class="fa fa-jpy"></i>', ''],
  ['CAD', '<i class="fa fa-usd"></i>', ''],
  ['AUD', '<i class="fa fa-usd"></i>', ''],
  ['CHF', 'CHF ',                      ''],
  ['NZD', '<i class="fa fa-usd"></i>', ''],
  ['SEK', '',                          ' kr'],
  ['RUB', '<i class="fa fa-rub"></i>', ''],
  ['BRL', '<i class="fa fa-usd"></i>', ''],
];

function refreshCurrencies(data) {
  function getPrice(name) {
    return data[name].last.toFixed(2);
  }

  for (var i = 0; i < currencies.length; i++) {
    var currency = currencies[i];
    var name = currency[0].toLowerCase();
	var price = getPrice(currency[0]);

    // append to markup in price ticker
    $('.' + name + '-result').html(currency[1] + price + currency[2]);
  }

  // set title to USD (both)
  var usd = getPrice('USD');
  $('title').html('$' + usd);

  // set default conversion rate to USD
  var conversionRate = $('#conversionRate');
  $(conversionRate).attr("value", 1 / usd);

  // when dropdown li is selected becomes default
  $(".dropdown-menu li a").click(function() {
    var button = $(this).parents(".dropdown").find('.btn');
    button.html($(this).text() + ' <span class="caret"></span>');
    button.val($(this).data('value'));

    // set seclectedCurrency to = dropdown selection
    var selectedCurrency = ($(this).attr('value'));

    // get exchange rate and set to selectedCurrency
    var rate = getPrice(selectedCurrency.toUpperCase());
    $(conversionRate).attr("value", 1 / rate);
  });
}

function updateTicker() {
  $.ajax({
    url: "ticker.json",
    dataType: 'json',
    crossDomain: true,
    success: refreshCurrencies
  });
}

updateTicker();
setInterval(updateTicker, 15000);

