
function mostrar()
{
  
	var base;
	var altura;
	var superfice;
	var perimetro;

	base=prompt("Digite la base de un triangulo equilatero: ");
	base=parseInt(base);

	altura=prompt("Digite la altura de un triangulo equilatero: ");
	altura=parseInt(altura);

	superfice=base*altura/2;
	perimetro=base*3;

	alert(" Su superfice es: "+superfice+" Su perimetro es: "+perimetro);


}
