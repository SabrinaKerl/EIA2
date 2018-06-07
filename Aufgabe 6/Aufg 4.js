/*
Aufgabe: 4 Forms and Interface
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 26.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let address = "https://eia2.herokuapp.com";
    let inputs = document.getElementsByTagName("input");
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("checkSearch");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    //Funktionen zur Antwortaufbereitung
    //Funktion f�r die Eingabe und �bergabe der Daten
    function insert(_event) {
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            firstname: inputs[0].value,
            name: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studyPath: document.getElementsByTagName("select").item(0).value
        };
        let convert = JSON.stringify(studi);
        // JavaScript-JSON-Objekt wird in einen string umgewandelt
        console.log(convert);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);
        // "GET": Methode, mit der Daten versendet werden
        // address: Internetaddresse vom Datentyp string (zuvor in einer Varaible gespeichert)
        // ?command=insert&data=: wird an die Internetaddresse angeh�ngt
        // convert: an die Internetaddresse werden die Daten aus dem Interface als string angeh�ngt
        // true: Asynchronous, zu einem sp�teren Zeitpunkt kann festgestellt werden, welche Antwort zu welcher Anfrage geh�rt
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }
    function handleStateChangeInsert(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    //Funktion f�r Refresh Feld
    function refresh(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }
    function handleStateChangeRefresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
    //Funktion f�r die Suche per Matrikelnummer   
    function search(_event) {
        let mtrkl = inputs[6].value;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();
    }
    function handleStateChangeSearch(_event) {
        let output = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Aufg 4.js.map