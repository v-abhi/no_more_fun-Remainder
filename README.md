# no_more_fun-Reminder
This will remind user when, he/she is surfing some specified(specified by user) sites for more time(more time will be decided by user) .
.
.
.
.
.
.
It is a remainder software working on browser.

Functioning :
		It basically reminds the user/viewer ( who is surfing on website* ); after a fixed interval of time* ; i.e, how much time has been
		passed while surfing on that webpage. So that, user can decide, whether he/she has to continue or not !.
		
		example: facebook, youtube 
		
		Because , Generally while surfing on entertaining websites (i.e like listening songs on youtube or surfing on facebook), 
		we used to forget about "time passed".
		
		websites* = generally entertaining and social media types websites

		time* = this time is decided by the user.

		
		
		

How to use :-

	Method 1:	working on firefox

	download file named "remainder.zip"
	extract this file
	open firefox
	type "about:debugging" in url and press enter
	
	click on "Load Temporary Add-on.."
	
		see image "setup_image/setup_1.png"
		see image "setup_image/setup_2.png"

	go to folder named "remiander" same folder which was extracted after downloading
		
		choose file named "manifest.json"
		and click "Ok" or "Open"
		
		see image "setup_image/setup_3.png"
		see image "setup_image/setup_4.png"
		
	that's all.

	*this will exists untill browser is not closed.
	* After opening the browser again, we have to set up again...
	
	
	
	
	
	Method 2:
	
	
	please wait.....
		

			







for setting remainder to a particular website/webpages :- 



open "manifest.json" in extracted folder

goto line 15

 add website of your choice
 
 example: 
 	for one particular website
 		"matches": ["*://*.youtube.com/*"], 
 		
	for more than one, seperate each by ","
 		"matches": ["*://*.mozilla.org/*" , "*://*.youtube.com/*"],
 		
	or just copy website domain name
	and paste in same format.
	
	example:
		for "flipkart.com"
			"matches": ["*://*.mozilla.org/*" , "*://*.youtube.com/*" , "*://*.youtube.com/*"],
		replace one youtube.com with flipkart.com
			"matches": ["*://*.mozilla.org/*" , "*://*.youtube.com/*" , "*://*.flipkart.com/*"],
		

