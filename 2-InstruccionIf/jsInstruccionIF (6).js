function mostrar()
{
//tomo la edad  
var edad;
	edad=document.getElementById('edad').value;
	
	if (edad>=13 && edad<=17 ) {

		alert("Es adolescente");


  } else{

    if(edad>=18){
  	alert("Es mayor de edad");

  


    }else{
  	alert("Es menor a 13");

  }



}//FIN DE LA FUNCIÓN