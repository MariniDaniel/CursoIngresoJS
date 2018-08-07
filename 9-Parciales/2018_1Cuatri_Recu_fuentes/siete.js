function mostrar()
{
	var nota;
	var edad;
	var sexo;
	var contador=0;
	var promedioTotal;
	var notaTotales=0;
	var notaMasBaja=999;
	var notaMasAlta= -999;
	var primeraMujer;
	var notaMasJoven=0;
	var cantidadMayores=0;
	var sexoNotaMasBaja;
	var contadorMujeres=0;
	var mujerBandera=0;
	var edadMenor;
	var sexoMasJoven;


	while(contador<5)
	{ 
		nota=prompt("Digite su nota: ");
		nota=parseInt(nota);

		while(nota<0||nota>10)
		{
			nota=prompt("Digite una nota valida: ");
			nota=parseInt(nota);
		}

		sexo=prompt("Digite sexo: ");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Sexo incorrecto,intentelo ahora: ");

		}

		edad=prompt("Digite su edad: ");
		edad=parseInt(edad);

		while(edad<0 || edad>99)
		{
			edad=prompt("Digite su edad: ");
			edad=parseInt(edad);

		}

		if (contador==0) 
		{
			edadMenor=edad;


		}

		if (nota<notaMasBaja) 
		{
			notaMasBaja=nota;

			sexoNotaMasBaja=sexo;
		}

		if (sexo=="f") 
		{
			mujerBandera=mujerBandera+1;

			contadorMujeres=contadorMujeres+1;
		}
		if(mujerBandera==1)
		{
			primeraMujer=edad;
			notaPrimeraMujer=nota;
		}

		if (edad>18&&sexo=="m"&&nota>=6) 
		{
			cantidadMayores=cantidadMayores+1;
		}
		if (edadMenor<=edad) 
		{	//999 < 10
			edadMenor=edad;

			sexoMasJoven=sexo;

			notaMasJoven=nota;
		}
		
		notaTotales=notaTotales+nota;

		contador++;
	}
	if (contadorMujeres==0) 
	{	
		contadorMujeres="No hubo mujeres";
		document.write("<br>"+contadorMujeres);
	}

	
	promedioTotal=notaTotales/5;

	document.write("<br>El promedio de las notas totales es: "+promedioTotal)

	document.write("<br>la nota mas baja es:  "+notaMasBaja+" y el sexo es: "+sexoNotaMasBaja);

	document.write("<br>La edad es:  "+primeraMujer+" y la nota es: "+notaPrimeraMujer);

	document.write("<br>La cantidad de hombres mayores de edad son :"+cantidadMayores);

	document.write("<br>El sexo del mas joven es: "+sexoMasJoven+" y la nota es: "+notaMasJoven);


	






}	
