function mostrar()
{

	var numero;
	var letra;
	var respuesta="si";
	var contadorNumerosPar=0;
	var contadorNumerosImpar=0;
	var contadorDeCeros=0;
	var contadorPostivos=0;
	var sumaPostivos=0;
	var promedioPositivos=0;
	var sumaNegativos=0;
	var maximo=-9999;
	var letraMaximo;
	var minimo=9999;
	var letraMinimo;

	

	while(respuesta!="no")
	{
		numero=prompt("Digite un numero entre -100 y 100: ");
		numero=parseInt(numero);

		while(numero<-100||numero>100)
		{
			numero=prompt("Digite un numero correcto: ");
			numero=parseInt(numero);
		}

		letra=prompt("Digite una letra: ");

		while(!isNaN(letra))
		{
			letra=prompt("Digite una letra correcta: ");
		}

		if (numero%2==0) 
		{
			contadorNumerosPar++;
		}
		if(numero%2!=0)
		{
			contadorNumerosImpar++;
		}

		if (numero==0) 
		{
			contadorDeCeros++;
		}
		if (numero>0) 
		{
			sumaPostivos=sumaPostivos+numero;
			contadorPostivos++;
		}
		if (numero<0)
		{
			sumaNegativos=sumaNegativos+numero;
		}

		if (numero>maximo) 
		{
			maximo=numero;

			letraMaximo=letra;

		}
		if (numero<minimo) 
		{
			minimo=numero;

			letraMinimo=letra;
		}

		respuesta=prompt("Para dejar de sumar numeros ponga  no  ");

	}

	promedioPositivos=sumaPostivos/contadorPostivos;
	


	document.write("<br>La cantidad de numeros pares es: "+contadorNumerosPar);
	document.write("<br>La cantidad de numeros impar es: "+contadorNumerosImpar);
	document.write("<br>La cantidad de ceros ingresados es: "+contadorDeCeros);
	document.write("<br>El promedio de los numeros positivos es:  "+promedioPositivos+" y la suma de los negativos es; "+sumaNegativos);
	document.write("<br>El numero del maximo es: "+maximo+" y la letra: "+letraMaximo);
	document.write("<br>El numero del minimo es: "+minimo+" y la letra: "+letraMinimo);





}

