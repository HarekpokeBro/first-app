var tal1;
var tal2;

function konverter(){
	tal1=parseFloat(document.test.tal_1.value);
	tal2=parseFloat(document.test.tal_2.value);
}

function sum(){
	konverter();
	var resultat=tal1+tal2;
	document.test.kommentar.value=resultat;
}

function sum1(){
	konverter();
	var resultat=tal1-tal2;
	document.test.kommentar.value=resultat;
}

function sum2(){
	konverter();
	var resultat=tal1*tal2;
	document.test.kommentar.value=resultat;
}

function sum3(){
	konverter();
	var resultat=tal1/tal2;
	document.test.kommentar.value=resultat;
}