/*
Aufgabe: 4 Forms and Interface
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 26.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufg4_Formular;
(function (Aufg4_Formular) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            major: inputs[4].value,
            gender: genderButton.checked
        };
        console.log(studi);
        console.log(matrikel);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        Aufg4_Formular.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        Aufg4_Formular.studiSimpleArray.push(studi);
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in Aufg4_Formular.studiHomoAssoc) {
            let studi = Aufg4_Formular.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += ", ";
            line += studi.major;
            output.value += line + "\n";
        }
        // zusätzliche Konsolenausgaben zur Demonstration
        /*console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();*/
    }
    function search(_event) {
        let outputs = document.getElementById("textarea")[1];
        outputs.value = "";
        let inputs = document.getElementsByTagName("input");
        let matrikel = inputs[7].value;
        let studi = Aufg4_Formular.studiHomoAssoc[matrikel];
        if (typeof studi === "undefined") {
            outputs.value += "Suchergebnis nicht vorhanden";
        }
        else {
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += ", ";
            line += studi.major;
            outputs.value += line + "\n";
        }
    }
})(Aufg4_Formular || (Aufg4_Formular = {}));
//# sourceMappingURL=Aufg 4.js.map