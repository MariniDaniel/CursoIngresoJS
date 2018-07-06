function mostrar()
{


	var precioInicial;
	var descuento;
	var cuenta;
	var iva;
	
	precioInicial=prompt("Ingrese precio : ");
	descuento=precioInicial*0.50;
	cuenta=precioInicial-descuento;
	iva=precioInicial*0.21;

	alert(" el precio con descuento es : "+cuenta+" y el iva es :  "+iva);
	document.getElementById('elPrecioFinal').value=descuento+iva;
	




}
