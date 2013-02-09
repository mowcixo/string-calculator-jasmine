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
	
	it("reciba los numeros que reciba devolverá la suma de los mismos", function() {
		expect( calc.Add('1,2,5,8,9') ).toEqual(26)
	})
	
})