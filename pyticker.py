#!/usr/bin/python
import json
import time
import urllib

var = 1

while var < 46:

	try:

		r = urllib.urlopen("https://blockchain.info/ticker")

		result = r.read()

		f = open('ticker.json', 'w')

		f.write(result)
	
		f.close()

		time.sleep(20)

		var = var + 1

	except:

      		time.sleep(20)

		var = var + 1
