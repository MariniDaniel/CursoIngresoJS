var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var piedra=1;
var papel=2;
var tijera=3;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina=math.floor(math.random()*3)+1;	



}//FIN DE LA FUNCIÓN



function piedra()
{
	if(eleccionMaquina==1){
		ContadorDeEmpates++;//contador++   ++contador  contador+=1; o  contador=contador+1;
		alert("Empato");
	}
	else if(eleccionMaquina==2){

		ContadorDeGanadas++;
		alert("Gano");

	}
	else{

		ContadorDePerdidas++;
		alert("Perdio")
	}


	mostrarResultado()
	comenzar()	

}//FIN DE LA FUNCIÓN

function papel()
{

if(eleccionMaquina==2){
		ContadorDeEmpates++;//contador++   ++contador  contador+=1; o  contador=contador+1;
		alert("Empato");
	}
	else if(eleccionMaquina==1){

		ContadorDeGanadas++;
		alert("Gano");

	}
	else{

		ContadorDePerdidas++;
		alert("Perdio")
	}

	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN


function tijera()
{

if(eleccionMaquina==3){
		ContadorDeEmpates++;//contador++   ++contador  contador+=1; o  contador=contador+1;
		alert("Empato");
	}
	else if(eleccionMaquina==1){

		ContadorDeGanadas++;
		alert("Gano");

	}
	else{

		ContadorDePerdidas++;
		alert("Perdio")
	}
	
	mostrarResultado()
	comenzar()
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

document.getElementById('Ganadas: ').value=ContadorDeGanadas;
document.getElementById('Empatadas: ').value=ContadorDePerdidas;
document.getElementById('Perdidas: ').value=ContadorDePerdidas;



}