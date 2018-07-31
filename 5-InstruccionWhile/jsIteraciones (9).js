function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var mayor=-9999;
	var menor=9999;
	contador++;
	var respuesta='si';

	while(respuesta!='no')								
	{
		numero=prompt("Digite un numero: ");
		numero=parseInt(numero);
		
		if (contador==1) //bandera ingresa solamente una vez
		{

			mayor=numero;

			menor=numero;


		}

		if(numero>mayor)
		{

			mayor=numero;

		}	

		else if (numero<menor) 
		{

			menor=numero;


		}


		respuesta=prompt("Ingrese :si: Si desea continuar:   ");

	}

	document.getElementById('maximo').value=mayor;
	document.getElementById("minimo").value=menor;
	//HACER EJERCICIO 12 <<<---------------

}//FIN DE LA FUNCIÓN