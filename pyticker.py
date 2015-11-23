#!/usr/bin/python

import cgi
import cgitb; cgitb.enable()  # for troubleshooting
import json
import time
import urllib

var = 1

while var == 1:

	r = urllib.urlopen("https://blockchain.info/ticker")

	result = r.read()

	f = open('ticker.json', 'w')

	f.write(result)
	
	f.close()

	time.sleep(20)

print "Content-type: text/plain\n\n";
print "Script...\n";
