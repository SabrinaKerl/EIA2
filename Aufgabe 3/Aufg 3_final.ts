/*
Aufgabe: 3 Events - Memory
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 22.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Memory {
    //>>>>Reihenfolge Code: DOM, alle Variablen, Hauptfunktionen/Hauptablauf, functions<<<<

    document.addEventListener("DOMContentLoaded", main);
    //Hinzuf�gen eines EventListener f�r das Dokument
    //"as DOMContentLoaded-Event wird ausgel�st, wenn das initiale HTML-Dokument vollst�ndig geladen und geparst ist."
    //"Parser: Computerprogramm, das in der Informatik f�r die Zerlegung + Umwandlung einer Eingabe in ein f�r die Weiterverarbeitung geeigneteres Format zust�ndig ist. H�ufig werden Parser eingesetzt, um im Anschluss an den Analysevorgang die Semantik der Eingabe zu erschlie�en und daraufhin Aktionen durchzuf�hren."

    // >>Variablen deklarieren<<
    
    let cardContent: string[] = ["Apfel", "Banane", "Kiwi", "Birne", "Mango", "Erdbeere", "Melone", "Himbeere", "Pfirsich", "Ananas"];
    //Karteninhalt ist Typ String, wird in ein Array gepackt
    
    let cardArray: HTMLElement[] = [];
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden

    let openArray: string[] = [];
    let openCards: number = 0;
    
    let numPairs: number;
    let numPlayers: number;
    //Festlegung, dass numPairs/numPlayers vom Typ numbers sind

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;
    //Festlegung, dass playerInfo/cardField vom Typ HTMLElemente sind

    let score: number = 0;
    //0 ist Platzhalter f�r sp�teren tats�chlichen Punktestand
    let name: string = "Spieler ";
    //"Spieler" kommt als Wort auf die Spieleransicht

    function main(): void {
        //Aufbau: function bezeichnung (param1:typ, param2: typ, � ) : void { � }
        //"Der Void-Operator wertet einen Ausdruck aus und gibt undefined zur�ck. Dieser Operator wird h�ufig verwendet, um den undefinierten Grundelementwert unter Verwendung von "void (0)" zu erhalten (n�tzlich, wenn ein Ausdruck ausgewertet wird, ohne den R�ckgabewert zu verwenden)."
                
        cardPairs();
        //Spieler soll Anzahl der Kartenpaare eingeben - Funktionsaufruf --> Zugriff auf Popup-Fenster
        
        numsPlayer();
         // Spieler sollen angeben, wie viele spielen wollen - Funktionsaufruf --> Zugriff auf Popup-Fenster

        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // DOM abh�ngige Variablen deklarieren, Bezug von .ts ins .html - an welcher Stelle soll eingef�gt werden

        // Spielkarten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            //Beginn des Z�hlvorgangs bei 0
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            //random state nur Status, kein Mischen! wird zweimal ausgef�hrt, da zwei Karten pro Spielgang aufgedeckt werden
        }

        randomMix(cardArray);
        // Karten mischen - Funktionsaufruf!

        for (let i: number = 0; i < cardArray.length; i++) {
             // Karten dem Spielbrett hinzuf�gen
            cardField.appendChild(cardArray[i]);
            // Karten werden jetzt im HTML angezeigt; (cardArry[i]) = Wert auf Popup-Fenster
        }
        
        for (let i: number = 0; i < numPlayers; i++) {
            // Spieler Anzeige generieren
            createPlayer(score, name + [i + 1]);
            // Aufruf der Funktion - score wird mitgegeben und die Variable name + Nummer des Spielers, die hochz�hlt; +1 damit Anzeigestart bei 1
        }
        
        cardField.addEventListener("click", clickHandler);
    }

    function cardPairs(): void {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        //Aufbau parseInt: parseInt(string, radix)
        //Aufbau prompt: prompt(text, defaultText)
        //"Die Funktion parseInt () analysiert eine Zeichenfolge und gibt eine Ganzzahl zur�ck. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll." 10 = Dezimal
        //"Die Methode prompt () zeigt ein Dialogfeld an, das den Besucher zur Eingabe auffordert. Die Methode prompt () gibt den Eingabewert zur�ck, wenn der Benutzer auf "OK" klickt. Wenn der Benutzer auf "Abbrechen" klickt, gibt die Methode null zur�ck."
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut; wiederholt sich bis Abbruch von User oder korrekte Eingabe
        }
    }

    function numsPlayer(): void {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
            // siehe cardPairs
        }
    }

    function createCard(_textDerAufDieKarteSoll: string): void {
        //Inhalt der Karte + Status (verdeckt/genommen/offen)
        //"Eine Funktion ist ein Codeblock, der f�r die Ausf�hrung einer bestimmten Aufgabe entwickelt wurde; sie wird ausgef�hrt, wenn sie "aufgerufen" wird."
        //vor Parametern immer Unterstrich!
        let card: HTMLElement = document.createElement("div");
        // div erzeugen f�r Karten
        card.innerHTML = `<span>${_textDerAufDieKarteSoll}</span>`;
        // //  innerHTML erwartet string `` | span = HTMLElement Container mit spezifischer Zuweisung | $ = 'string' + variable + 'string'
        // Text aus dem Array soll auf eine Karte 
        //***warum ist Zugriff auf cardContent array m�glich?!***
        card.setAttribute("class", "card hidden");
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
    }

    function createPlayer(_score: number, _name: string): void {
        //Punktzahl + Spielername
        let player: HTMLElement = document.createElement("div");
        //div erzeugen f�r Spieler
        let scoreField: HTMLElement = document.createElement("div");
        //div erzeugen f�r Punktzahl
        let n: string = _score.toString();
        // Umwandeln einer number in string
        player.innerText = _name;
        //innerText immer Bef�llung f�r div
        scoreField.innerText = n;
        // da n umgewandelt wird in string ist scoreField = n
        playerInfo.appendChild(player);
        //wird im HTML angeh�ngt
        playerInfo.appendChild(scoreField);
        //wird im HTML angeh�ngt
    }

    // Mischen des Arrays
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
        // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> Array ist jetzt durchgemischt
    }

    function clickHandler (_event: MouseEvent): void {
        let cardClass: HTMLElement = <HTMLElement>_event.target;
        // gibt ausl�sendes HTMLElement zur�ck
        if (cardClass.classList.contains ("card")) {
            // "Die classList-Eigenschaft gibt den Klassennamen eines Elements als DOMTokenList-Objekt zur�ck. Diese Eigenschaft ist n�tzlich, um CSS-Klassen f�r ein Element hinzuzuf�gen, zu entfernen und umzuschalten."
            //z�hlt mit, wie viele Karten den Status "aufgedeckt" haben
            if (cardClass.classList.contains ("hidden")) {
                // wenn "hidden" enthalten dann...
                openCards ++;
                cardClass.classList.remove ("hidden");
                // ...entferne "hidden" und...
                cardClass.classList.add ("visible");
                // ...f�ge "visible" hinzu
                }
            }
        
        if (openCards == 2) {
            // wenn der Z�hler der aufgedeckten Karten den Wert 2 erreicht, dann...
            setTimeout (matchCards, 2000);
            console.log("Karten werden verglichen");
            // ...setze den TimeOut auf 2 Sekunden Verz�gerung
            }
        
        if (openCards >= 2) {
            console.log("mehr als 2 sind offen");
            // wenn der Z�hler der aufgedeckten Karten einen gr��er-gleichen Wert als 2 erreicht, dann...
            cardClass.classList.remove ("visible");
            // ...entferne Status "visible" und...
            cardClass.classList.add ("hidden");
            // ...f�ge Status "hidden" hinzu
            }
        }
    
    function matchCards (): void {
        let openArray: HTMLElement[] = filterCardsByClass ("visible");
        // lass openArray ein HTMLElement Array sein, welches die Funktion filterCardsByClass ausf�hren soll
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            // Vergleich Array [0] zu Array [1] und deren jeweils erstes Kind
            for (let s: number = 0; s > openArray.length; s++) {
                // lass s eine number sein, die den Wert 0 besitzt; lass s kleiner sein als die openArray.lenght; z�hle mit
                openArray[s].classList.remove ("visible");
                // entferne  "visible"
                openArray[s].classList.add ("taken");
                // f�ge "taken" hinzu
                }
            }
        
        else {
            for (let s: number = 0; s < openArray.length; s++) {
                // siehe oben
                openArray[s].classList.remove ("visible"); 
                // entferne "visible"
                openArray[s].classList.add ("hidden");
                // f�ge "hidden" hinzu
                }
            }
        
        winAlert ();
        // Aufruf Funktion
        openArray = []; 
        // Aufruf Array
        openCards = 0;
        // openCards erh�lt den Wert 0
        }
    
    function winAlert (): void {
        let cardsTaken: HTMLElement [] = filterCardsByClass ("hidden");
        // lass cardsTaken in HTMLElement Array sein, welches die Funktion filterCardsByClass ausf�hren soll
        if (cardsTaken.length == 0) {
            // wenn alle Karten den Status "taken" haben erscheint der Gewinnalarm
            alert ("Glueckwunsch, Du hast das Spiel beendet!");
            }
        
        cardsTaken = [];
        }
    
    function filterCardsByClass (_filter: string): HTMLElement [] {
        return cardArray. filter (card => card.classList.contains (_filter));
        }            
}