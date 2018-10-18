var var1 = 0;


// function for restart
	function restart()
	{
			var1 = prompt('Please enter time interval in minutes.');
			var1 = var1 *1000;
			var1 = var1 * 60;	
			setTimeout(alertt, var1);
			return;	
	}




// function for alertt
	function alertt()
	{
		var1 = var1 / 60;
		var1 = var1 /1000;
		var var2=confirm("Hi, It has been " + var1 + "minutes, Would you like to be reminded again ??");
		if(var2==true)
		{
			restart();
		}
		else
		{
			return;
		}
	}



// function for start
	function start()
	{
		var conf=confirm("Hi, Are you sure to be reminded ?");
		if(conf==true)
		{
			var1 = prompt('Please enter time interval in minutes.');
			if(var1 != "" && var1 !== null) 
			{	
				var1 = var1 *1000;
				var1 = var1 * 60;
				setTimeout(alertt, var1);
			}
			else
			{
				return;
			}
		}
		else
		{
			return;
		}
		
	}
	
	

setTimeout(start, 5000);	









