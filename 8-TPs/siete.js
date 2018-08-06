/*  jose m 25
	maria f 16
	jesus m 33
	fer f 81     */
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var cantidadDeMujeres=0;
	var	cantidadDeHombres=0;
	var mayorDeEdad=0;
	var menorDeEdad=0;
	var edadMayor=-9999;
	var edadMenor=9999;
	var promedioMujeres;
	var promedioHombres;
	var sumaEdadMujer=0;
	var sumaEdadHombre=0;
	var contador=0;


	while(contador<4)		//entrada de informacion
	{

 		contador++;

		nombre=prompt("Digite su nombre:  ");

		sexo=prompt("Digite su sexo: ");

		while(sexo!="f" && sexo!="m")   //si no es te pide denuevo
		{

			sexo=prompt("Digite su sexo: ");
			
		}

		edad=prompt("Digite su edad: ");
		edad=parseInt(edad);

		while(isNaN(edad)||edad<0 || edad>100)	//Si no entra la edad la pido denuevo
		{

			edad=prompt("Digite su edad:  ");
			edad=parseInt(edad); 

		}

		
		if (sexo=="f") 
		{
			cantidadDeMujeres=cantidadDeMujeres+1;//cantidad de mujeres

			sumaEdadMujer=sumaEdadMujer+edad; //regla de 3 ,saco promedio
			promedioMujeres=sumaEdadMujer/cantidadDeMujeres;
		}

		else if (sexo=="m")
		{

			cantidadDeHombres=cantidadDeHombres+1;
			sumaEdadHombre=sumaEdadHombre+edad;
			promedioHombres=sumaEdadHombre/cantidadDeHombres;

		}
	 	
	 	if (edad>=18) 
	 	{

	 		mayorDeEdad=mayorDeEdad+1;

	 	}

	 	else if (edad<18) 
	 	{

	 		menorDeEdad=menorDeEdad+1;

	 	}
	 	
	 	
	 	if(edad>edadMayor) //No hace falta bandera.
		{

			edadMayor=edad;

		}	

		else if (edad<edadMenor) 
		{

			edadMenor=edad;
		}





	}

	document.write("<br>Cantidad de mujeres: "+cantidadDeMujeres);

	document.write("<br>Cantidad de hombres: "+cantidadDeHombres);

	document.write("<br>Cantidad mayores de edad: "+mayorDeEdad);

	document.write("<br>Cantidad menores de edad: "+menorDeEdad);

	document.write("<br>La edad mas baja: "+edadMenor);

	document.write("<br>La edad mas alta: "+edadMayor);

	document.write("<br>Promedio de edad mujeres: "+promedioMujeres);

	document.write("<br>Promedio de edad hombres: "+promedioHombres);
















}
