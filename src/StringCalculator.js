var StringCalculator= {

	Add: function(numbers) {
		numbers= ( numbers == '' ) ? '0' : numbers
		
		var res= 0,
			splittedNumbers= numbers.split(',')
		
		for( var i= 0; i < splittedNumbers.length; i++ )
			res += parseInt( splittedNumbers[ i ] )
		
		return res
	}

}