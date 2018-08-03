/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var NumeroDeLegajo;
	var	Nacionalidad;

	edad=prompt("Digite su edad: ");

	while(edad<18 || edad>90)
	{
		edad=prompt("Digite su edad: ");

	}

	sexo=prompt("Digite su sexo: ");

	while(sexo!=f && sexo!=m)
	{
		sexo=prompt("Digite su sexo: ");

	}

	estadoCivil=prompt("Digite su estado civil :1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos : ");
	

	while(estadoCivil!=1 &&  estadoCivil!=2 &&  estadoCivil!=3 && estadoCivil!=4)
	{
		
		estadoCivil=prompt("Digite su estado civil: ");

	}
	switch(estadoCivil)
	{

		case 1:
			estadoCivil="soltero";
		break;

		case 2:
			estadoCivil="casados";	
		break;

		case 3: 
			estadoCivil="divorciados";
		break;
		
		case 4:
			estadoCivil="viudos";
		break;


	}






	document.getElementById('Edad').value=edad;
	document.getElementById("Sexo").value=sexo;
	document.getElementById(estadoCivil)















}
