/*
Aufgabe: 4 FormElements und Interfaces
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 03.05.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Memory;
(function (Memory) {
    //>>>>Reihenfolge Code: DOM, alle Variablen, Hauptfunktionen/Hauptablauf, functions<<<<
    window.addEventListener("load", main);
    // >>Variablen deklarieren<<
    //Karteninhalt ist Typ String, wird in ein Array gepackt
    let cardArray = [];
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let openArray = [];
    let openCards = 0;
    let checkContent = [];
    let stepperAmount = 1;
    let playerCounter = 1;
    let playerScore = 0;
    let playerInfo;
    let cardField;
    //Festlegung, dass playerInfo/cardField vom Typ HTMLElemente sind
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("stepper").addEventListener("change", createStepper);
    }
    function addPlayer() {
        if (playerCounter < 4) {
            let player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("class", "player");
            document.getElementById("names").appendChild(player);
            playerCounter++;
        }
    }
    function removePlayer() {
        let allPlayer = document.getELementsByClassName("player");
        let lastPlayer = allPlayer[allPlayer.length - 1];
        lastPlayer.remove();
        playerCounter--;
    }
    function createStepper() {
        if (stepperAmount == 1) {
            let stepper = document.createElement("input");
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "5");
            stepper.setAttribute("min", "5");
            stepper.setAttribute("max", Memory.decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepper2").appendChild(stepper);
            stepperAmount++;
        }
        else {
            stepperUpdate();
        }
    }
    function stepperUpdate() {
        document.getElementById("stepper").remove();
        stepperAmount--;
        createStepper();
    }
    function createCard(_cardContent) {
        //Inhalt der Karte + Status (verdeckt/genommen/offen)
        //"Eine Funktion ist ein Codeblock, der f�r die Ausf�hrung einer bestimmten Aufgabe entwickelt wurde; sie wird ausgef�hrt, wenn sie "aufgerufen" wird."
        //vor Parametern immer Unterstrich!
        let card = document.createElement("div");
        // div erzeugen f�r Karten
        card.innerHTML = "<p>" + _cardContent + "<p>";
        // //  innerHTML erwartet string `` | span = HTMLElement Container mit spezifischer Zuweisung | $ = 'string' + variable + 'string'
        // Text aus dem Array soll auf eine Karte 
        //***warum ist Zugriff auf cardContent array m�glich?!***
        card.setAttribute("class", "card hidden");
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
        checkContent.push(card);
        card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
        let cardClass = _event.target;
        // gibt ausl�sendes HTMLElement zur�ck
        if (cardClass.classList.contains("card")) {
            // "Die classList-Eigenschaft gibt den Klassennamen eines Elements als DOMTokenList-Objekt zur�ck. Diese Eigenschaft ist n�tzlich, um CSS-Klassen f�r ein Element hinzuzuf�gen, zu entfernen und umzuschalten."
            //z�hlt mit, wie viele Karten den Status "aufgedeckt" haben
            openCards++;
            if (cardClass.classList.contains("hidden")) {
                // wenn "hidden" enthalten dann...
                cardClass.classList.remove("hidden");
                // ...entferne "hidden" und...
                cardClass.classList.add("visible");
                // ...f�ge "visible" hinzu
                openArray.push(cardClass);
            }
        }
        if (openCards == 2) {
            // wenn der Z�hler der aufgedeckten Karten den Wert 2 erreicht, dann...
            setTimeout(matchCards, 2000);
        }
        if (openCards > 2) {
            // wenn der Z�hler der aufgedeckten Karten einen gr��er-gleichen Wert als 2 erreicht, dann...
            cardClass.classList.remove("visible");
            // ...entferne Status "visible" und...
            cardClass.classList.add("hidden");
        }
    }
    function matchCards() {
        let openArray = [0].innerHTML == openArray[1].innerHTML, { if:  = (openArray = [0].children[0].innerHTML == openArray[1].children[0].innerHTML) => {
            // Vergleich Array [0] zu Array [1] und deren jeweils erstes Kind
            for (let i = 0; i < 2; i++) {
                // lass s eine number sein, die den Wert 0 besitzt; lass s kleiner sein als die openArray.lenght; z�hle mit
                openArray[i].classList.remove("visible");
                // entferne  "visible"
                openArray[i].classList.add("taken");
            }
            checkContent.splice(0, 2);
        }, else: { for:  = (let), i: number = 0 } };
        i < openArray.length;
        i++;
        {
            // siehe oben
            openArray[i].classList.remove("visible");
            // entferne "visible"
            openArray[i].classList.add("hidden");
        }
    }
    winAlert();
    // Aufruf Funktion
    openArray = [];
    // Aufruf Array
    openCards = 0;
})(Memory || (Memory = {}));
function winAlert() {
    if (checkContent.length == 0) {
        // wenn alle Karten den Status "taken" haben erscheint der Gewinnalarm
        alert("Glueckwunsch, Du hast das Spiel beendet!");
    }
}
// Mischen des Arrays
function randomMix(_array) {
    // _array = das Array, das durchmischt werden soll
    for (let i = _array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [_array[i], _array[j]] = [_array[j], _array[i]];
    }
    return _array;
    // Ausgabe -> Array ist jetzt durchgemischt
}
function start() {
    document.getElementbyId("interface").style.display = "none";
    document.getElementById("player-info").style.display = "block";
    document.getELementById("card-field").style.display = "block";
    let inputs = document.getElementByTagName("input");
    let numPairs = parseInt(document.getElementById("stepper").value);
    for (let i = 0; i < playerCounter; i++) {
        let playerDiv = document.createElement("div");
        document.getElementById("player-info").appendChild(playerDiv);
        playerDiv.innerHTML = inputs[i].value + ": " + playerScore + " Punkte";
    }
    for (let i = 0; i < numPairs; i++) {
        createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
    }
    randomMix(cardArray);
    for (let i = 0; i < cardArray.length; i++) {
        document.getElementById("card-div").appendChild(cardArray[i]);
    }
    playerInfo = document.getElementById("player-info");
    cardField = document.getElementById("card-div");
}
//# sourceMappingURL=Aufg 4-1_Memory.js.map