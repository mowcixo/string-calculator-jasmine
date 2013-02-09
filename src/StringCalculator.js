var StringCalculator= {

	Add: function(numbers) {
		if( !numbers ) numbers = '0'
		var res = 0,
			customSeparator = numbers.indexOf('//') == 0,
			separator = customSeparator ? numbers.substring(2, 3) : ',',
			splittedNumbers = []
			
		if( customSeparator )
			numbers = numbers.split('\n')[1]
		else
			numbers = numbers.replace(/\n/g, ',')
			
		splittedNumbers = numbers.split( separator )
			
		for( var i= 0; i < splittedNumbers.length; i++ )
			res += parseInt( splittedNumbers[ i ] )
		
		return res
	}

}