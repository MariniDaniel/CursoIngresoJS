function mostrar()
{

var contador=0;
var acumulador=0;
var respuesta='si';

	while(respuesta=="si"){

		numero=prompt("Ingrese un numero : ");
		numero=parseInt(numero);


		acumulador=acumulador+numero;
		contador=contador+1;//contador++;

		respuesta=prompt("Ingrese :si: Si desea continuar:   ");




	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN