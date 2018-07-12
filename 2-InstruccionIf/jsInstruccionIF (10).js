function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random=Math.floor((Math.random() *10)+1);
	if (random>4 && random<=8) {

		alert("APROBO");
		

	}
		else if (random<4){

		alert("Vamos,la proxima se puede");
			
		}

		else{

			alert("Excelente");

		}


}//FIN DE LA FUNCIÓN