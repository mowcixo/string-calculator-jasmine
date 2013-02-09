var StringCalculator= {

	Add: function(numbers) {
		if( !numbers ) numbers = '0'
		var res= 0
		
		if( numbers.indexOf('//') == 0 ) {
			var separator= numbers.substring(2, 3),	
				numbers= numbers.split('\n')[1],
				splittedNumbers = numbers.split( separator )
			
			for( var i= 0; i < splittedNumbers.length; i++ )
				res += parseInt( splittedNumbers[ i ] )
		}else {
			numbers = numbers.replace(/\n/g, ',');
			var	splittedNumbers = numbers.split(',')
			
			for( var i= 0; i < splittedNumbers.length; i++ )
				res += parseInt( splittedNumbers[ i ] )
		}
		
		return res
	}

}