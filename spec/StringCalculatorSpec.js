describe("StringCalculator -http://osherove.com/tdd-kata-1/-", function() {
	var calc= StringCalculator

	it("si recibe una cadena vac�a devolver� cero", function() {
		expect(calc.Add('')).toEqual(0)
	})
	
})