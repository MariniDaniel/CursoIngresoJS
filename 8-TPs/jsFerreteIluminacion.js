/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precioUnitario= 35;//variable num
 	var marca;
 	var cantidadLamparas; 	
 	var precioFinal;
 	var descuento=1;
 		marca=document.getElementById('Marca').value;
 		cantidadLamparas=document.getElementById("Cantidad").value;
 		cantidadLamparas=parseInt(cantidadLamparas);
 		precioBruto=precioUnitario *cantidadLamparas;


 		switch(cantidadLamparas){

 			case 1:
 			case 2:
 			
 				break;
 			case 3:
 				switch(marca){
 			case "ArgentinaLuz":
 				descuento=precioBruto*0,85;
 				break;
 			case "FelipeLamparas":
 				descuento=precioBruto*0,90;
 				break;

 			default:
 				descuento=precioBruto*0,95;

 				}
 				





 		}

 		precioFinal=precioBruto*descuento;
 		document.getElementById('precioDescuento').value=precioFinal;










































/*
 		if(cantidadLamparas>=6){

 			descuento=precioBruto*0,5;

 		}

 		else if(cantidadLamparas==5 && marca=="ArgentinaLuz"){

 			descuento=precioBruto*0,4;


 		}

 		else if(cantidadLamparas==5){//no hace falta poner ArgentinaLuz porque entra en el if anterior.

 			descuento=precioBruto*0,3;

 		}

 		else if(cantidadLamparas==4){
 			if(marca=="ArgentinaLuz" \\ marca=="FelipeLamparas");

 			descuento=precioBruto*0,25;

 			else
 				descuento=precioBruto*0,2;

 		}	


 		else if(cantidadLamparas==3 && marca=="FelipeLamparas"){

 			descuento=precioBruto*0,1;

 		else if(cantidadLamparas==3 && marca=="ArgentinaLuz");

 			descuento=precioBruto*0,15;

 		else if(cantidadLamparas==3){

 			descuento=precioBruto*0,05;

 		}
 		else
 			descuento=0;

 		}

 		precioFinal=precioBruto-descuento;

 		if(precioFinal>120){

 			ingresosBrutos=precioFinal*0,1;
 			precioFinal=precioFinal+ingresosBrutos;
 			mensaje="El precio es"+precioFinal+"es"+ingresosBrutos;

		}
		 else{
		 	mensaje="El precio es"+precioFinal;
		 }


		 alert(mensaje);


*/

}
