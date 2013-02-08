describe("StringCalculator -http://osherove.com/tdd-kata-1/-", function() {
	var calc= StringCalculator

	it("si recibe una cadena vacía devolverá cero", function() {
		expect(calc.Add('')).toEqual(0)
	})
	
})