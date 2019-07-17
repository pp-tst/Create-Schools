function textInBraille() {
  var output = document.getElementById("output");
  var input = document.getElementById("input");

  if (output && input) { // beides gefunden?
    var eingabe = input.value.toLowerCase();
    var text = "";
    var doppel = ["ch", "ei"]; // Array-Liste der Doppel-Laute


    var index = 0;
    var ueberspringen = false;
    var schueberspringen = false;


    for (var i = 0; i < eingabe.length; i++) {

      //Wegen SCH
      if (schueberspringen == true) {
        schueberspringen = false;
        continue;
      }

      //Wegen Doppelbuchstaben
      if (ueberspringen == true) {
        ueberspringen = false;
        continue;
      }

      var name = eingabe[i];
      //bei Interpunktionszeichen keine Aktion
      switch (name) {
        case ".":
          continue;
        case ",":
          continue;
        case ";":
          continue;
        case ":":
          continue;
        case "?":
          continue;
        case "!":
          continue;
        case "_":
          continue;
        case "-":
          continue;
        case "(":
          continue;
        case ")":
          continue;
        case "[":
          continue;
        case "]":
          continue;
        case "{":
          continue;
        case "}":
          continue;
        case "@":
          continue;
        case "&":
          continue;
        case "#":
          continue;
        case "~":
          continue;
        case "_":
          continue;
        case "$":
          continue;
        case "+":
          continue;
        case "*":
          continue;
        case "0":
          continue;
        case "1":
          continue;
        case "2":
          continue;
        case "3":
          continue;
        case "4":
          continue;
        case "5":
          continue;
        case "6":
          continue;
        case "7":
          continue;
        case "8":
          continue;
        case "9":
          continue;
        case "":
          continue;
        case "§":
          continue;
        case "%":
          continue;
        case "=":
          continue;
        case "/":
          continue;
        case "\"":
          continue; //Anführungszeichen muss als Escape-Zeichen angegeben werden

      }
      // Überprüfung auf sch
      if (i < eingabe.length - 2) {
        var vSCH = eingabe.substr(i, 3);

        if (vSCH == "sch") {
          name = "sch";
          ueberspringen = true;
          schueberspringen = true;
        }
      }

      // Überprüfung auf Doppel-Zeichen
      if (i < eingabe.length - 1) {
        var dbl = eingabe.substr(i, 2);


        if (dbl == "ch") {
          name = "ch";
          ueberspringen = true;
        }

        if (dbl == "äu") {
          name = "äu";
          ueberspringen = true;
        }

        if (dbl == "au") {
          name = "au";
          ueberspringen = true;
        }


        if (dbl == "ei") {
          name = "ei";
          ueberspringen = true;
        }

        if (dbl == "eu") {
          name = "eu";
          ueberspringen = true;
        }

        if (dbl == "st") {
          name = "st";
          ueberspringen = true;
        }

        if (dbl == "ie") {
          name = "ie";
          ueberspringen = true;
        }

      }


      //Überprüfung Umlaute
      //  	if (name == "ü")
      //  		name ="ue";

      //  	if (name == "ö")
      //  		name ="oe";


      //Leerzeichen abfragen
      if (name == " ") {
        text += "<br/>";
        continue;
      }

      //***************** Pfadangabe ***************************************
      text += "<div class='outline'><img src='" + template_path + "/img/braille-sim/" + name + ".gif' alt='Buchstabe " + name + "' title='Buchstabe " + name + "' /></div>\n";

    } //Ende for (var i=0; i<eingabe.length; i++) {


    output.innerHTML = "<h4>Die &Uuml;bersetzung von '" + input.value + "' lautet:</h4>" + text;

  }
}

//Anzeige des Braille-Alphabets ä=aah
// function brailleAlphabet() {
//   var letters = ["leer", "a", "au", "äu", "ä", "b", "c", "ch", "d", "e", "ei", "eu", "f", "g", "h", "i", "ie", "j", "k", "l", "m", "n", "o", "ö", "p", "q", "r", "s", "ß", "sch", "st", "t", "u", "ü", "v", "w", "x", "y", "z"];
//   zaehlerbraille = 0;
//   for (var all in letters) {
//     zaehlerbraille++;
//
//     //ß abfragen weil sonst durch toUpperCase() SS angezeigt wird
//     vBezBuchstabe = "";
//     if (letters[all] == "ß") {
//       vBezBuchstabe = "ß"
//     } else {
//       vBezBuchstabe = letters[all].toUpperCase();
//     }
//
//     //***************** Pfadangabe ***************************************
//     document.writeln("<div><button type='button' onclick='braille2normal(\"" + letters[all] + "\")'>" +
//       "<img src='" + template_path + "/img/braille-sim/" + letters[all] + ".gif' alt='Buchstabe " + letters[all] + "' title='Buchstabe " + letters[all] + "' /> </button> <br>" + letters[all].toUpperCase() + "</div>");
//
//   }
// }
//Funktion wird ausgeführt bei Klick auf ein Braille-Zeichen
function braille2normal(letter) {
  var output = document.getElementById("braille2normal");
  if (letter == "leer") {
    output.innerHTML = output.innerHTML + "&nbsp;";
  }
  //Abfrage ß
  else if (letter == "ß") {
    output.innerHTML = output.innerHTML + "ß";
  } else output.innerHTML = output.innerHTML + letter.toUpperCase();
  document.getElementById("output_buttons").style.visibility = "visible"; // macht die Buttons sichtbar
}

//Funktionen für Schalter Ausgabe Text in Braille
function brailleDelChar() {
  var textOutput = document.getElementById("braille2normal").innerHTML; // Inhalt auslesen
  if (textOutput.length) { // gibt es Inhalt?
    if (textOutput.substr(textOutput.length - 6, 6) == "&nbsp;") { // ist es ein Leerzeichen?
      textOutput = textOutput.substr(0, (textOutput.length - 6)); // ja, dann lösche die letzten 6 Zeichen = &nbsp;
    } else { // ansonsten
      textOutput = textOutput.substr(0, (textOutput.length - 1)); //schneide letzten Buchstaben ab
    }
  }
  document.getElementById("braille2normal").innerHTML = textOutput; //restlicher Text ausgeben
}

  //Funktion löscht den Inhalt der Ausgabezeile
function brailleNew() {
  document.getElementById("braille2normal").innerHTML=""; // löscht einfach den Inhalt der Div
}
