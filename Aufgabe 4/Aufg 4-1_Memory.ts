/*
Aufgabe: 4 FormElements und Interfaces
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 03.05.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Memory {
    //>>>>Reihenfolge Code: DOM, alle Variablen, Hauptfunktionen/Hauptablauf, functions<<<<
    
    window.addEventListener("load", main);
    
    // >>Variablen deklarieren<<
    
 
    //Karteninhalt ist Typ String, wird in ein Array gepackt
    
    let cardArray: HTMLElement[] = [];
    // leeres Array, in das die für das Spiel benötigten Karten als divs hineingespeichert werden

    let openArray: HTMLElement[] = [];
    let openCards: number = 0;
    
    let checkContent: HTMLElement[] = [];
    let stepperAmount: number = 1;
    
    let playerCounter: number = 1;
    let playerScore: number = 0;

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;
    //Festlegung, dass playerInfo/cardField vom Typ HTMLElemente sind
    
    function main(): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("stepper").addEventListener("change", createStepper);
        }
    
    function addPlayer(): void {
        if (playerCounter < 4) {
            let player: HTMLELement = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("class", "player");
            document.getElementById("names").appendChild(player);
            playerCounter++;
            }
        }
    
    function removePlayer(): void {
        let allPlayer: NodeListOf<Element> = document.getELementsByClassName("player");
        let lastPlayer: HTMLInputElement = <HTMLInputElement>allPlayer[allPlayer.length - 1];
        lastPlayer.remove();
        playerCounter--;
        }
    
    function createStepper(): void {
        if (stepperAmount == 1) {
            let stepper: HTMLElement = document.createElement("input");
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "5");
            stepper.setAttribute("min", "5");
            stepper.setAttribute("max", decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepper2").appendChild(stepper);
            stepperAmount++;
            }
        
        else {
            stepperUpdate();
            }
        }
    
    function stepperUpdate(): void {
        document.getElementById("stepper").remove();
        stepperAmount--;
        createStepper();
        }

    function createCard(_cardContent: string): void {
        //Inhalt der Karte + Status (verdeckt/genommen/offen)
        //"Eine Funktion ist ein Codeblock, der für die Ausführung einer bestimmten Aufgabe entwickelt wurde; sie wird ausgeführt, wenn sie "aufgerufen" wird."
        //vor Parametern immer Unterstrich!
        let card: HTMLElement = document.createElement("div");
        // div erzeugen für Karten
        card.innerHTML = "<p>" + _cardContent + "<p>";
        // //  innerHTML erwartet string `` | span = HTMLElement Container mit spezifischer Zuweisung | $ = 'string' + variable + 'string'
        // Text aus dem Array soll auf eine Karte 
        //***warum ist Zugriff auf cardContent array möglich?!***
        card.setAttribute("class", "card hidden");
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
        checkContent.push(card);
        card.addEventListener("click", clickHandler);
    }

    function clickHandler (_event: MouseEvent): void {
        let cardClass: HTMLElement = <HTMLElement>_event.target;
        // gibt auslösendes HTMLElement zurück
        if (cardClass.classList.contains ("card")) {
            // "Die classList-Eigenschaft gibt den Klassennamen eines Elements als DOMTokenList-Objekt zurück. Diese Eigenschaft ist nützlich, um CSS-Klassen für ein Element hinzuzufügen, zu entfernen und umzuschalten."
            //zählt mit, wie viele Karten den Status "aufgedeckt" haben
            openCards ++;
            if (cardClass.classList.contains ("hidden")) {
                // wenn "hidden" enthalten dann...
                cardClass.classList.remove("hidden");
                // ...entferne "hidden" und...
                cardClass.classList.add("visible");
                // ...füge "visible" hinzu
                openArray.push(cardClass);
                }
            }
        
        if (openCards == 2) {
            // wenn der Zähler der aufgedeckten Karten den Wert 2 erreicht, dann...
          setTimeout (matchCards, 2000);
            //setTimeout (matchCards, 2000);
            // ...setze den TimeOut auf 2 Sekunden Verzögerung
            /*cardClass.classList.remove ("hidden");
            cardClass.classList.add ("visible");*/
            }
        
        if (openCards > 2) {
            // wenn der Zähler der aufgedeckten Karten einen größer-gleichen Wert als 2 erreicht, dann...
            cardClass.classList.remove ("visible");
            // ...entferne Status "visible" und...
            cardClass.classList.add ("hidden");
            // ...füge Status "hidden" hinzu
            }
        }
    
    function matchCards (): void { 
        let openArray[0].innerHTML == openArray[1].innerHTML) { 
       
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            // Vergleich Array [0] zu Array [1] und deren jeweils erstes Kind
            for (let i: number = 0; i < 2; i++) {
                // lass s eine number sein, die den Wert 0 besitzt; lass s kleiner sein als die openArray.lenght; zähle mit
                openArray[i].classList.remove("visible");
                // entferne  "visible"
                openArray[i].classList.add("taken");
                // füge "taken" hinzu
            }
            checkContent.splice(0, 2);
        }        
        
        else {
            for (let i: number = 0; i < openArray.length; i++) {
                // siehe oben
                openArray[i].classList.remove("visible"); 
                // entferne "visible"
                openArray[i].classList.add("hidden");
                // füge "hidden" hinzu
                }
            }
   
        
        winAlert ();
        // Aufruf Funktion
        openArray = []; 
        // Aufruf Array
        openCards = 0;
        // openCards erhält den Wert 0
        }
    
    function winAlert (): void {
        if (checkContent.length == 0) {
            // wenn alle Karten den Status "taken" haben erscheint der Gewinnalarm
            alert("Glueckwunsch, Du hast das Spiel beendet!");
            }

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

    function start(): void {
        document.getElementbyId("interface").style.display = "none";
        document.getElementById("player-info").style.display = "block";
        document.getELementById("card-field").style.display = "block";
        
        let inputs: NodeListOf<HTMLInputElement> = document.getElementByTagName("input");
        let numPairs: number = parseInt((<HTMLInputElement>document.getElementById("stepper")).value);
        
        for (let i: number = 0; i < playerCounter; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + playerScore + " Punkte";
            }
        
        for (let i: number = 0; i < numPairs; i++) {
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            }
        
        randomMix(cardArray);
        
        for (let i: number = 0; i < cardArray.length; i++) {
            document.getElementById("card-div").appendChild(cardArray[i]);
            }
        
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        }
}