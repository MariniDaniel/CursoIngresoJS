function mostrar()
{
	var contador;
	var numeroIngresado;
	var numeroAnterior;
	var divisores;
	var numeroRecorridos;
	divisores=0;

	numeroIngresado=prompt("Ingrese numeroIngresado");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorridos=numeroIngresado;numeroRecorridos>1;numeroRecorridos--)
	{
			divisores=0;
			for(numeroAnterior=numeroRecorridos-1;numeroAnterior>1;numeroAnterior--)
			{

				if(numeroRecorridos % numeroAnterior==0)
				{

					divisores++;
					break;
				}




			}

			if(divisores==0)
			{

				console.log("Es primo: "+numeroRecorridos);

			}	
		 
			


	}

/*



	for(numeroAnterior==numeroIngresado-1 ; numeroAnterior>1 ; numeroAnterior--)
	{


		if(numeroIngresado % numeroAnterior==0)
		{

			divisores++;
			break;
		}

	}

	if(divisores==0)
	{

		console.log("Es primo");

	}	
 
	else
	{

		console.log("No es de los numeros primos");
	}	

	console.log(divisores);

*/

}//FIN DE LA FUNCIÓN