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
	


	var precioUnitario=35;
 	var cantidadLamparas;
 	var precioFinal;
 	var precioBruto;
 	var descuento=1;
 	var marca;
 	var ingresosBrutos;
 	marca=document.getElementById('Marca').value;                 //Tomo marca
 	cantidadLamparas=document.getElementById('Cantidad').value;	  //Tomo cantidad de lamparas 		
 	cantidadLamparas=parseInt(cantidadLamparas);				  //Paso a entero la cantidad	
 	precioBruto=precioUnitario*cantidadLamparas;

 	switch(cantidadLamparas){

 		case 1:
 		case 2:

 			break;

 		case 3:

 			if (marca=="ArgentinaLuz") {

 				precioBruto=precioBruto*0.85;
 			}	

 			else if (marca=="FelipeLamparas") {

 				precioBruto=precioBruto*0.90;
 			}

 			else{

 				precioBruto=precioBruto*0.95;

 			}

 		case 4:

 			if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas"){

 			precioBruto=precioBruto*0.75;
 		
 			}

 			else {

 			precioBruto=precioBruto*0.80;

 			}

 		case 5:

 			if (cantidadLamparas==5 && marca=="ArgentinaLuz") {

 			precioBruto=precioBruto*0.60;

 			}

 			else if (cantidadLamparas==5) {

 			precioBruto=precioBruto*0.70

 			}

 		case 6:

 			if (cantidadLamparas>=6) {

 			precioBruto=precioBruto*0.50;

 	
 			}	


 	}



	precioFinal=precioBruto*descuento;
 	document.getElementById('precioDescuento').value=precioFinal;

 	if (precioFinal>=120) {

 		ingresosBrutos=precioFinal*0.1;
 		precioFinal=precioFinal+ingresosBrutos;
 		alert("Usted pago :  "+precioFinal+"   ,Siendo   "+ingresosBrutos+"  el impuesto que se pago");


 	}



















	/*var precioUnitario=35;
 	var cantidadLamparas;
 	var precioFinal;
 	var precioBruto;
 	var descuento=1;
 	var marca;
 	var ingresosBrutos;
 	marca=document.getElementById('Marca').value;                 //Tomo marca
 	cantidadLamparas=document.getElementById('Cantidad').value;	  //Tomo cantidad de lamparas 		
 	cantidadLamparas=parseInt(cantidadLamparas);				  //Paso a entero la cantidad	
 	precioBruto=precioUnitario*cantidadLamparas;


 	if (cantidadLamparas>=6) {

 		precioBruto=precioBruto*0.50;

 	
 	}

 	else if (cantidadLamparas==5 && marca=="ArgentinaLuz") {

 		precioBruto=precioBruto*0.60;

 	}

 	else if (cantidadLamparas==5) {

 		precioBruto=precioBruto*0.70

 	}

 	else if (cantidadLamparas==4) {

 		if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas"){

 			precioBruto=precioBruto*0.75;


 		}

 		else {

 			precioBruto=precioBruto*0.80;

 		}	

	}

	else if (cantidadLamparas==3) {

		if (marca=="ArgentinaLuz") {

			precioBruto=precioBruto*0.85;
		}

		else if (marca=="FelipeLamparas") {

			precioBruto=precioBruto*0.90;

		}

		else{

			precioBruto=precioBruto*0.95;

		}





	}

 	precioFinal=precioBruto*descuento;
 	document.getElementById('precioDescuento').value=precioFinal;
 	if (precioFinal>=120) {

 		ingresosBrutos=precioFinal*0.1;
 		precioFinal=precioFinal+ingresosBrutos;
 		alert("Usted pago :  "+precioFinal+"   ,Siendo   "+ingresosBrutos+"  el impuesto que se pago");



 	}*/















 /*	var precioUnitario=35;
 	var cantidadLamparas;
 	var precioFinal;
 	var precioBruto;
 	var descuento=1;
 	var marca;
 	var ingresosBrutos;
 	marca=document.getElementById('Marca').value;                 //Tomo marca
 	cantidadLamparas=document.getElementById('Cantidad').value;	  //Tomo cantidad de lamparas 		
 	cantidadLamparas=parseInt(cantidadLamparas);				  //Paso a entero la cantidad	
 	precioBruto=precioUnitario*cantidadLamparas;				  //Multiplico el precio por la cant de lamparas
 	
 	switch(cantidadLamparas){
 		case 1:
 		case 2:

 			break;

 		case 3:

 			switch(marca){

 				case "ArgentinaLuz":

 					precioBruto=precioBruto*0.85;

 					break;

 				case "FelipeLamparas":

 					precioBruto=precioBruto*0.90;

 					break;

 				default:

 					precioBruto=precioBruto*0.95;
 	
 			}
 		
 			 break;

 		case 4:
 				
 			switch(marca){

 				case "ArgentinaLuz":
 				case "FelipeLamparas":

 					precioBruto=precioBruto*0.75;

 					break;

 				default:
 					precioBruto=precioBruto*0.80;

 			}
 			break;
 		
 		case 5:
 			switch(marca){

 				case "ArgentinaLuz":
 					precioBruto=precioBruto*0.60;
 					break;

 				default:

 					precioBruto=precioBruto*0.70;


 			}	
 			break;

 		default:
 		
 				precioBruto=precioBruto*0.50;

 			


 	}



 	precioFinal=precioBruto*descuento;
 	document.getElementById('precioDescuento').value=precioFinal;
 	if (precioFinal>=120){													//Es mayor a 120 se suma 10 %

 		ingresosBrutos=precioFinal*0.1;
 		precioFinal=precioFinal+ingresosBrutos;
 		alert("Usted pago :  "+precioFinal+"   ,Siendo   "+ingresosBrutos+"  el impuesto que se pago");
 	}
	
	*/

}
	