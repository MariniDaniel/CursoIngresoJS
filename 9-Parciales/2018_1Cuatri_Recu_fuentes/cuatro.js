function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno=prompt("Ingrese el primer numero: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese el segundo numero: ");
	numeroDos=parseInt(numeroDos);


	if (numeroUno==numeroDos) 
	{
		alert(numeroUno+""+numeroDos);
	}
	else if (numeroUno>numeroDos) 
	{
		resultado=numeroUno/numeroDos;

		alert("La division da: "+resultado);

	}

	else if (numeroUno<numeroDos) 
	{
		resultado=numeroUno+numeroDos;

		

		if (resultado<50) 
		{
			alert("La suma es: "+resultado+" Y es menor a 50");
		}

		else
		{
			alert("La suma es: "+resultado);
		}

	}

	else
	{
		alert("No ingreso un numero: ");
	}


}
