function mostrar()
{
	var numero;
	var contador;
	var cantidadDivisible=0;
	
	numero=prompt("Ingrese un numero: ");
	numero=parseInt(numero);

	for(contador=1;contador!=numero  ;contador ++)
	{

		if (contador%numero==0) 
		{

			cantidadDivisible=cantidadDivisible+1;
			console.log(contador);

			
		}

			

	}

	alert("La cantidad de numeros pares en el ejercicio son : "+cantidadDivisible);


}//FIN DE LA FUNCIÓN