function mostrar()
{
	var numero;
	var contador;
	var cantidadDivisible=0;
	
	numero=prompt("Ingrese un numero: ");
	numero=parseInt(numero);

	for(contador=1;contador!=numero  ;contador ++)
	{

		if (numero%contador==0) 
		{

			cantidadDivisible=cantidadDivisible+1;
			console.log(contador);

			
		}

			

	}

	alert("La cantidad de numeros divisibles en el ejercicio son : "+cantidadDivisible);




}//FIN DE LA FUNCIÓN