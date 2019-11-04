//Grundlagen des Web
//Aufgabe 1
console.log("---I---");
console.log("");
console.log("Mein Name ist: Oya Aydin"); //Ausgabe meines Namens auf der Konsole 
console.log("");



//Aufgabe 2

console.log("---II---");
//Diese Kosntante steht für die maximale Höhe der möglichen Bewertung 

const max_höhe= 5;

var aktuelle_anzahl=100;//Es haben insgesamt 100 Nutzer bewertet
var aktuelle_bewertung= 500; //ich gehe davon aus, das jeder die App mit 5 bewertet hat 


console.log("");
console.log("\tDies ist eine Bewertung!:");
console.log("");
console.log("Maximale Bewertung:",max_höhe);
console.log("Es haben insgesamt bewertet:",aktuelle_anzahl);
console.log("Die aktuelle Bewertung beträgt:",aktuelle_bewertung);
console.log("");

//simulierte Bewertung
//Variablen einen anderen Typ zuweisen 

//let aktuelle_anzahl= 101; //eine simulierte Bewertung
//let aktuelle_bewertung= 503; //nächste Bewertung mit 3 Sternen 

console.log("\tEine neue Bewertung ist eingegangen!");
console.log("\tDie Werte werden aktualisiert");
console.log("\t...");

aktuelle_anzahl=101; //neue Person hat bewertet
aktuelle_bewertung=503;// eine neue Bewertung addiert 

console.log("Neue insgesamte Bewertung:",aktuelle_anzahl);
console.log("Neue aktuelle Bewertung beträgt:",aktuelle_bewertung);

console.log("");
//der Konstante einen neuen Wert zuweisen, nach deklaration 

//var max_höhe=10; //der Konstante einen neuen Wert zugewiesen 

//was passiert, wenn man einer Kostante einen neue Wert gibt ?

//eine Kostante deklariert eine unveränderliche Variable,also passiert da garnichts

 //was passiert, wenn man eine Variable einen neue Wert gibt ?
 //var deklariert eine Variable unabhängig von ihrem Scope
 //let delklariert eine lokale Variable im Block Scope
 //somit geht es, kann sich der Wert ändern 

//Aufgabe 3
// von der Konsole einlesen 


console.log("");
console.log("---III---");
console.log("\tBitte geben Sie ihre Bewertung ab:");
console.log("Sie können 1 bis 5 Sterne vergeben!");
function prompt(question,callback) {
var stdin= process.stdin;
var stdout= process.stdout;
stdin.resume();
stdout.write(question);
stdin.once('data',function(data) {
callback(data.toString().trim());
});
}

prompt('Ihre Bewertung: ', function(input) {
if(input > max_höhe) { //Konstante beachten const=5
console.log("Achtung! Die maximale Bewertung sind 5 Sterne!");
}
else if(isNaN(input)==true) { //Fehlermeldung wenn das ein non integerwert ist 
console.log(input + "Dies ist keine Zahl,bitte geben Sie eine Zahl von 1 bis 5 ein!");
}
else {
console.log(input); // Input : Eingabe = Eingabe vom Nutzer 
}
process.exit(); //Prozess wird beendet 

});

// Kien Übergang 
// zufällige Bewertungen der Nutzer soll keins mehr eingeben !

console.log("");

//Aufgabe 4
// Fakultät

console.log("---IV---");
var n;

function random(max_höhe) {
//Math.floor()- rundet jede Zahl aif die nächst niedrigere ganze Zahl ab 
n= Math.floor(Math.random(max_höhe)*Math.floor(max_höhe)) + 1; //Math.random() liefert....
return n;

}

console.log("Eine zufällige Bewertung:",random(max_höhe));

/* 
var fak = 0;

for(i=0; i<=n; i++) {
fak= fak+i;

}

console.log("");
console.log("Die aktuelle Bewertung:",aktuelle_anzahl + 1);
console.log("Die gesamt Bewertungen",aktuelle_bewertung + n);
//Fakultät n!
console.log("Die berechnete Bewertung:",fak);
*/
console.log("");
console.log("---V---");

var fak = 1;
function berechnung(n) {

for (i=1; i<=n; i++) {
fak= fak*i;
}
return fak;
}
console.log("");
console.log("Die aktuelle Bewertungen:",aktuelle_anzahl + 1);
console.log("Die gesamt Bewertungen:", aktuelle_bewertung + n);
console.log("Die berechnete Bewertung:", berechnung(n));


