/*
Aufgabe: 4 Forms and Interface
Name: Kerl, Sabrina
Matrikel: 257167
Datum: 26.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufg4_Formular {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchButton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
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
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
    }

    function refresh(_event: Event): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition
            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
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
    function search(_event: Event): void {
        let outputs: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("textarea")[1];
        outputs.value = "";
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let matrikel: string = inputs[7].value;
        let studi: Studi = studiHomoAssoc[matrikel];
        
        if (typeof studi === "undefined") {
                outputs.value += "Suchergebnis nicht vorhanden";
            }
        
        else {
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            line += ", ";
            line += studi.major;
            outputs.value += line + "\n";
            }
        }
}