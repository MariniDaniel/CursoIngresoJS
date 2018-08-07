function mostrar()
{
	/*En una tienda se ingresan los datos de los clientes nombre,sexo,estado civil(soltero,casado,viudo),
	cantidad de productos e importe total de la compra
	nombre de la persona con mas cantidad de productos
	de los solteros el sexo ,el sexo del que mas gasto y el que menos gasto
	el importe y nombre de la primera mujer en comprar
	el promedio de gasto de los viudos */

	var nombre;
	var sexo;
	var estadoCivil;
	var cantidadDeProductos;
	var importeTotalCompra;
	var personaMasProductos=0;
	var nombreMasProductos;
	var solteroMasGasto;
	var sexoSolteroMasGasto;
	var solterMenosGasto;
	var sexoSolteroMenosGasto;
	var contadorSoltero=0;
	var contadorMujeres=0;
	var importePrimeraMujer=0;
	var nombrePrimeraMujer;
	var promedioViudos;
	var sumaViudos=0;
	var contadorViudos=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		nombre=prompt("Ingrese un nombre: ");

		while(!isNaN(nombre))
		{
			nombre=prompt("Ingrese un nombre: ");
		}

		sexo=prompt("Ingrese su sexo: ");

		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Ingrese su sexo: ");
		}

		estadoCivil=prompt("Ingrese su estado civil: soltero,casado o viudo  ");

		while(estadoCivil!="casado"&& estadoCivil!="soltero"&&estadoCivil!="viudo")
		{
			estadoCivil=prompt("Ingrese su estado civil: soltero,casado o viudo  ");

		}

		cantidadDeProductos=prompt("Ingrese la cantidad de productos: ");
		cantidadDeProductos=parseInt(cantidadDeProductos);

		while(isNaN(cantidadDeProductos))
		{
			cantidadDeProductos=prompt("Ingrese la cantidad de productos: ");
			cantidadDeProductos=parseInt(cantidadDeProductos);	
		}

		importeTotalCompra=prompt("Digite el importe total de su compra: ");
		importeTotalCompra=parseInt(importeTotalCompra);

		while(isNaN(importeTotalCompra))
		{
			importeTotalCompra=prompt("Digite el importe total de su compra: ");
			importeTotalCompra=parseInt(importeTotalCompra);
		}

		if (cantidadDeProductos>personaMasProductos) 
		{
			nombreMasProductos=nombre;
		}

		if (estadoCivil=="soltero") 
		{
			contadorSoltero=contadorSoltero+1;

			if (contadorSoltero==1) 
			{
				solterMenosGasto=importeTotalCompra;
				solteroMasGasto=importeTotalCompra;

				sexoSolteroMenosGasto=sexo;
				sexoSolteroMasGasto=sexo;
			}
			if (importeTotalCompra>solteroMasGasto) 
			{
				solteroMasGasto=importeTotalCompra;

				sexoSolteroMasGasto=sexo;
			}
			if (importeTotalCompra<solterMenosGasto) 
			{
				solterMenosGasto=importeTotalCompra;

				sexoSolteroMenosGasto=sexo;
			}
		}

		if (sexo=="f") 
		{
			contadorMujeres=contadorMujeres+1;

			if (contadorMujeres==1) 
			{
				importePrimeraMujer=importeTotalCompra;
				nombrePrimeraMujer=nombre;
			}

		}

		if(estadoCivil=="viudo")
		{
			contadorViudos=contadorViudos+1;
			sumaViudos=sumaViudos+importeTotalCompra;
		}

		respuesta=prompt("Si desea dejar de ingresar personas pulse: no  ");
	}

	promedioViudos=sumaViudos/contadorViudos;

	if (contadorMujeres==0) 
	{
		document.write("<br>No compraron mujeres");
	}
	if (contadorViudos==0) 
	{
		document.write("<br>No compraron viudos");
	}

	document.write("<br>El nombre de la persona que lleva mas productos es: "+nombreMasProductos);
	document.write("<br>El sexo del soltero que mas gasto es : "+sexoSolteroMasGasto+" y el que menos gasto soltero: "+sexoSolteroMenosGasto);
	document.write("<br>El importe de la primera mujer es : "+importePrimeraMujer+" y el nombre es: "+nombrePrimeraMujer);
	document.write("<br>El promedio de gastos de los viudos es: "+promedioViudos);
}
