describe("StringCalculator -http://osherove.com/tdd-kata-1/-", function() {
	var calc= StringCalculator

	it("si recibe una cadena vacía devolverá cero", function() {
		expect( calc.Add('') ).toEqual(0)
	})

	it("si recibe un número devolverá ese mismo número", function() {
		expect( calc.Add('1') ).toEqual(1)
	})

	it("si recibe dos números devolverá la suma de ambos", function() {
		expect( calc.Add('1,2') ).toEqual(3)
	})

	it("si recibe varios números devolverá la suma de los mismos", function() {
		expect( calc.Add('1,2,5,8,9') ).toEqual(25)
	})

	it("si en lugar de comas usamos salto de línea como separador sigue sumando los números que reciba", function() {
		expect( calc.Add('1\n2\n3') ).toEqual(6)
	})

	it("si usamos como separador tanto salto de línea como comas sigue sumando los números que reciba", function() {
		expect( calc.Add('1\n2,3') ).toEqual(6)
	})

	it("si usamos como separador uno previamente establecido sigue sumando los números que reciba", function() {
		expect( calc.Add('//*\n1*2*3') ).toEqual(6)
	})

	it("si uno de los números recibidos es negativo se mostrará una excepción con los mismos", function() {
		expect( function() {
			calc.Add('//*\n1*-1*3')
		} )
		.toThrow( new Error('Negative numbers not allowed: -1.') )

		expect( function() {
			calc.Add('1,-1,-3')
		} )
		.toThrow( new Error('Negative numbers not allowed: -1,-3.') )
	})

	it("si uno de los números recibidos es mayor que mil se ignorará", function() {
		expect( calc.Add('//*\n1*2*3*1001') ).toEqual(6)
		expect( calc.Add('1\n2,3,1001') ).toEqual(6)
	})
	
	it("si el delimitador que configuremos tiene más de un dígito de longitud", function() {
		expect( calc.Add('//***\n1***2***3***1001') ).toEqual(6)
	})
	
	it("si configuramos varios delimitadores", function() {
		expect( calc.Add('//[*][%][&]\n1*2%3&1001') ).toEqual(6)
	})
	
	it("si configuramos varios delimitadores que tienen a su vez más de un dígito de longitud", function() {
		expect( calc.Add('//[*][%%][&&&]\n1*2%%3&&&1001&&&2') ).toEqual(8)
	})

})