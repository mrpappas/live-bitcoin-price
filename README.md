# live-bitcoin-price
Live Exchange Rates + Calculator
========

[Live Example](http://mongr.co/live-btc-price/)

Shows live bitcoin price in USD, EUR, GBP, CNY, JPY, CAD, AUD, CHF, NZD, SEK, RUB, and BRL

live prices according to 'last' transaction [Blockchain.info](https://blockchain.info/api)

Calculator takes any above mentioned currency and converts to bitcoin value (currency -> btc)

pyticker.py grabs data from [Blockchain.info](https://blockchain.info/api) inserts into ticker.json, loops for ~15 minutes.  

Set up cron job to run pyticker.py every 15 mins.




Github
----------

$git clone https://github.com/mrpappas/live-bitcoin-price.git

Support
-------

drop me a line mrbenpappas@gmail.com

