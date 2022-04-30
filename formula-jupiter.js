var usuario = prompt("Cual es tu peso kg "); // es un valor en 
// var planeta = prompt("Elige tu planeta.1 es marte y 2 es jupiter");
var planeta = parseInt(prompt("Elige tu planeta.\n1 es Mercurio,  \n2 es Venus, \n3 es La tierra, \n4 Marte, \n5 es Jupiter, \n6 es Saturno, \n7 es Urano, \n8 es Neptuno")); 
var peso = parseFloat(usuario)
var g_mercurio = 3.7;
var g_venus = 8.87;
var g_tierra = 9.8;
var g_marte = 3.71;
var g_jupiter = 24.8;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;
var peso_final;
if ( planeta == 1) {
    peso_final = peso * g_mercurio / g_tierra;
    console.log(peso_final = (peso_final.toFixed(2)))
    console.log(document.write("Tu peso en Mercurio es: <strong> " + peso_final + " kilos</strong>"));
    
}
else if (planeta == 2) {
    peso_final = peso * g_venus / g_tierra;
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Tu peso en Venus es: <strong> " + peso_final + " kilos</strong>"));
    
}
else if (planeta == 3) {
    peso_final = g_tierra;
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Tu peso en la TIerra  es lo mismo: <strong> " + peso_final + " kilos</strong>"));
}
else if (planeta == 4) {
    peso_final = peso * g_marte / g_tierra;
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Tu peso en Marte es : <strong> " + peso_final + " kilos</strong>"));
}
else if (planeta == 5) {
    peso_final = peso * g_jupiter / g_tierra;
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Tu peso en Jupiter es : <strong> " + peso_final + " kilos</strong>"));
}
else if (planeta == 6) {
    peso_final = peso * g_saturno / g_tierra;
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Tu peso en Saturno es : <strong> " + peso_final + " kilos</strong>"));
}
else if (planeta == 7) {
    peso_final = peso * g_urano / g_tierra;
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Tu peso en Urano es : <strong> " + peso_final + " kilos</strong>"));
}
else if (planeta == 8) {
    peso_final = peso * g_neptuno / g_tierra;
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Tu peso en Neptuno es : <strong> " + peso_final + " kilos</strong>"));
}
else {
    peso_final = "Super fat";
    console.log(peso_final = parseInt(peso_final))
    console.log(document.write("Es un error al elegir esa opcion: <strong> " + peso_final + " kilos</strong>"));
}
// para forzar para que solo se ocupe if se usa else if (planeta ==2)

// una solucion mas corta es agregar var nombre; y en if colocar nombre = "text" . Por cada condicion que tengan agregar en document +variable nombre + y listo.
// document.write("Tu peso +nombre + en Jupiter es: <strong> " + peso_final + " kilos</strong>"))

