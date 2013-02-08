describe("StringCalculator -http://osherove.com/tdd-kata-1/-", function() {
	var calc= StringCalculator

	it("si recibe una cadena vacía devolverá cero", function() {
		expect(calc.Add('')).toEqual(0)
	})
	
	it("si recibe un número devolverá ese mismo número", function() {
		expect(calc.Add('1')).toEqual(2);
	});
	
})