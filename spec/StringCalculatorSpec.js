describe("StringCalculator -http://osherove.com/tdd-kata-1/-", function() {
	var calc= StringCalculator

	it("si recibe una cadena vac�a devolver� cero", function() {
		expect( calc.Add('') ).toEqual(0)
	})
	
	it("si recibe un n�mero devolver� ese mismo n�mero", function() {
		expect( calc.Add('1') ).toEqual(1)
	})
	
	it("si recibe dos n�meros devolver� la suma de ambos", function() {
		expect( calc.Add('1,2') ).toEqual(3)
	})
	
	it("si recibe varios n�meros devolver� la suma de los mismos", function() {
		expect( calc.Add('1,2,5,8,9') ).toEqual(25)
	})
	
	it("si en lugar de comas usamos salto de l�nea como separador sigue sumando los n�meros que reciba", function() {
		expect( calc.Add('1\n2\n3') ).toEqual(6)
	})
	
})