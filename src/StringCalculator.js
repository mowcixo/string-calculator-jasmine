var StringCalculator= {

	Add: function(numbers) {
		if( !numbers ) numbers = '0'
		
		var res= 0,
			splittedNumbers= []
		
		if( numbers.indexOf('\n') > -1 )
			splittedNumbers= numbers.split('\n')
		else
			splittedNumbers= numbers.split(',')
		
		for( var i= 0; i < splittedNumbers.length; i++ )
			res += parseInt( splittedNumbers[ i ] )
		
		return res
	}

}