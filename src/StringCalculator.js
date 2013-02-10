var StringCalculator= {

	Add: function(numbers) {
		if( !numbers ) numbers = '0'
		var res = 0,
			customSeparator = numbers.indexOf('//') == 0,
			separator = customSeparator ? numbers.substring( 2, numbers.indexOf('\n') ) : ',',
			multipleSeparator = numbers.indexOf('][') > 0,
			splittedNumbers = [],
			negativeNumbers = []
			
		if( customSeparator ) {
			if( multipleSeparator ) {
				var separators =
					numbers
					.substring( 2, numbers.indexOf('\n') )
					.substring( 1 )
				separators = separators.substring( 0, separators.length - 1 )
				separators = separators.split('][')
				var r = new RegExp('[' + separators.join('') + ']', 'g')		
				numbers = numbers.split('\n')[1]
				numbers = numbers.replace( r, separator )
			}else 
				numbers = numbers.split('\n')[1]
		}else
			numbers = numbers.replace( /\n/g, ',' )
			
		splittedNumbers = numbers.split( separator )
		
		for( var i= 0 ; i < splittedNumbers.length ; i++ ) {
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