function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño){  

		case "Enero":
		alert("que comiences bien el año!!!");
		break;

		case "Marzo":
		alert("a clases!!!.");
		break;

		case "Julio":
		alert("Se vienen las vacacionessssss");
		break;

		case "Diciembre":
		alert("Felices Fiestas");
		break;

	
		default:
		alert("Selecciono mal la fecha");
	}
}//FIN DE LA FUNCIÓN