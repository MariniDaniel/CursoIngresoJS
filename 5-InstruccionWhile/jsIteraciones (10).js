function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var numero;
	var suma=0;
	var contadorPositivo=0; //acumulador positivo
	var sumaPositivos=0;	
	var promedioPositivos=0;
	var resta=0;		
	var sumaNegativos=0;
	var contadorNegativo=0;//acumulador negativo
	var promedioNegativos=0;
	var contadorCeros=0;	//acumulador cero
	var contadorPares=0;
	var diferencia=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Digite un numero: ");
		numero=parseInt(numero);
	
		if (numero>0) 
		{
			contadorPositivo=contadorPositivo+1;
			sumaPositivos=sumaPositivos+numero;
		}	

		else if (numero<0) 
		{
			contadorNegativo=contadorNegativo+1;
			sumaNegativos=sumaNegativos+numero;
		}			

		else 
		{
			contadorCeros=contadorCeros+1;
		}		
		if (numero%2==0) 
		{
			contadorPares++;

		}

		respuesta=prompt("Para dejar de sumar numeros digite NO ");

	}
	if (contadorPositivo>contadorNegativo) 
	{
		diferencia=contadorPositivo-contadorNegativo;
		document.write("<br>La diferencia es: "+diferencia+" Positivos");
	}
	else if(contadorPositivo<contadorNegativo)
	{

		diferencia=contadorNegativo-contadorPositivo;
		document.write("<br>La diferencia es: "+diferencia+" Negativos");


	}
	else{

		total="Cantidad igual";
		document.write("<br>La diferencia es: "+diferencia);

	}


	promedioPositivos=sumaPositivos/contadorPositivo;	
	promedioNegativos=sumaNegativos/contadorNegativo;
	


	document.write("<br>Esta es la suma de positivos:  "+sumaPositivos);	
	document.write("<br>Esta es la suma de los negativos:  "+sumaNegativos);
	document.write("<br>Este es el contador de positivos:  "+contadorPositivo);
	document.write("<br>Este es el contador de negativos:  "+contadorNegativo);
	document.write("<br>Estas son las cantidades de cero:  "+contadorCeros);
	document.write("<br>Este es el promedio de los positivos:  "+promedioPositivos);
	document.write("<br>Este es el promedio de los negativos:  "+promedioNegativos);
	document.write("<br>La cantidad de numeros pares es:  "+contadorPares);

}//FIN DE LA FUNCIÓN