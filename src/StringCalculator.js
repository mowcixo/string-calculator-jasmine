var StringCalculator= {

	Add: function(numbers) {
		if( !numbers ) numbers = '0'
		var res = 0,
			customSeparator = numbers.indexOf('//') == 0,
			separator = customSeparator ? numbers.substring(2, numbers.indexOf('\n')) : ',',
			splittedNumbers = [],
			negativeNumbers = []
			
		if( customSeparator )
			numbers = numbers.split('\n')[1]
		else
			numbers = numbers.replace(/\n/g, ',')
			
		splittedNumbers = numbers.split( separator )
		
		for( var i= 0; i < splittedNumbers.length; i++ ) {
			var number = parseInt( splittedNumbers[ i ] )
			if( number > 1000 ) continue
			
			if( number < 0 )
				negativeNumbers.push( number )
			else
				res += number
		}
		
		if( !!negativeNumbers.length )
			throw new Error( 'Negative numbers not allowed: ' + negativeNumbers.join(',') + '.' )
		
		return res
	}

}