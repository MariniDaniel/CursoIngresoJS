function mostrar()
{
	var dia;
	var mensaje;
	dia=prompt("Ingrese un dia utilizando 1 para lunes y 7 para domingo: ");
	dia=parseInt(dia);
	
	switch(dia)
	{
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			mensaje="A trabajar";
		break;	

		case 6:
		case 7:
			mensaje="Buen finde";
		break;

		default:
			mensaje="error";

	}

	alert(mensaje);

}
