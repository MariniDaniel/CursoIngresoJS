function mostrar()
{


	var precioInicial;
	var descuento;
	var precioConDescuento;
	var iva;
	var precioFinal;

	precioInicial=prompt("Digite el precio : ");
	precioInicial=parseInt(precioInicial);

	descuento=prompt("Digite el descuento: ");
	descuento=parseInt(descuento);

	precioConDescuento=precioInicial-descuento;

	iva=precioConDescuento*0.21;

	precioFinal=precioConDescuento+iva;

	alert("El descuento en dinero es: "+descuento+" ,El precio con descuento es: "+precioConDescuento+" , el iva es: "+iva);

	document.getElementById("elPrecioFinal").value=precioFinal;



	




}
