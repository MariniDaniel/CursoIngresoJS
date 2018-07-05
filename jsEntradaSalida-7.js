/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno;
	var numerodos;
	var resultado
	numerouno=document.getElementById('numeroUno').value;
	numerouno=parseInt(numerouno);
	numerodos=document.getElementById('numeroDos').value;
	numerodos=parseInt(numerodos);
	resultado=numerouno+numerodos;
	alert("La suma es: "+resultado);
}

function restar()
{
	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;
	var resultado=parseInt(numerouno)-parseInt(numerodos);
	alert("La resta es: "+resultado);
}

function multiplicar()
{ 
	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;
	var resultado=parseInt(numerouno)*parseInt(numerodos);
	alert("La multiplicacion es: "+resultado);
}

function dividir()
{
	
	var numerouno=document.getElementById('numeroUno').value;
	var numerodos=document.getElementById('numeroDos').value;
	var resultado=parseInt(numerouno)/parseInt(numerodos);
	alert("La division es : "+resultado)

}

