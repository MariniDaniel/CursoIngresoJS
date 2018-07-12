function mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	
	if (edad==15) {

		alert("Niña bonita");


	}
	else{
		alert("No tiene 15 años")
	}



}//FIN DE LA FUNCIÓN
/*
	Operadores 
 == Es la variable para decir que son 2 iguales ej (edad==19)
	!=
	>
	<
	>=
	<=
	=== igualdad extricta  true== true 2==2
	Operadores logicos y &&   e   o ||
	Si el if es falso se ejecuta el else y va solamente cuando termina el if



*/