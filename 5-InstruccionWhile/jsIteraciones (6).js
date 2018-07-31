	function mostrar()
{

	var contador=0; // para que empieze de 0
	var acumulador=0;	//Como vamos a sumar tiene que estar en 0
	var numero;

	

	while(contador<5){	//Condicion tiene que ser falsa en algun momento

		numero=prompt("Ingrese un numero : ");
		numero=parseInt(numero);


		acumulador=acumulador+numero;//variable + variable
		contador=contador+1;//contador++; si se suma una letra es NAN


	



	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;//se saca promedio de los 5 numeros

}//FIN DE LA FUNCIÓN