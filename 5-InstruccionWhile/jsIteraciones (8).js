function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta=="si"){

		numero=prompt("Ingrese un numero : ");
		numero=parseInt(numero);

		if(numero>0){

			numero=positivo+numero;
			positivo=numero;

		}

		else if (numero<0){

			numero=negativo*numero;
			negativo=numero;

		}





		respuesta=prompt("Ingrese :si: Si desea continuar:   ");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN