function mostrar()
{
	var nota;
	var mensaje;

	nota=document.getElementById("laHora").value;
	nota=parseInt(nota);

	switch(nota)
	{

		case 0:
		case 1:
		case 3:
			mensaje="La proxima se puede";
			alert(mensaje);
		break;

		case 4:
		case 5:
		case 6:
			mensaje="Raspando";
			if (nota<5) 
			{
				alert(mensaje+ "  debes preocuparte más");
			}
			else
			{
				alert(mensaje);
			}
		break;

		case 7:
		case 8:
		case 9:
		case 10: 

			mensaje=" aprobo";
			if (nota>8) 
			{
				alert(mensaje +" muy bien");
			}
			else
			{
				alert(mensaje);
			}

		break;

		default:
			mensaje="Invalido";
			alert(mensaje);
		
	}
	
}
