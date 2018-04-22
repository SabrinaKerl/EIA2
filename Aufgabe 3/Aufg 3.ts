namespace L02 {
    window.addEventListener("load", init);
    //Füge einen EventListener für das ganze Fenster hinzu

    function init(_event: Event): void {
        //erstellen einer Funktion ohne fest zugeordneten Rückgabewert
        console.log(_event);
        //gib das _event in der Konsole aus
        let fieldset: HTMLFieldSetElement = document.getElementsByTagName("fieldset")[0]; 
        //lass die Variable fieldset ein HTMLFieldSetElement sein und bei Aufruf des Dokuments nehme nochmal den Tagname "fieldset" und zwar von der ersten Stelle im Array
        fieldset.addEventListener("click", clickHandler);
        
        fieldset.addEventListener("click", clickHandler, true);
        //"true" steht für capturing phase / false steht für bubbling phase --> wird dann 

        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
        //direkte Zuweisung auf Button-Element --> <...>
        button.addEventListener("click", clickHandler);
        //Hinzufügen des EventListeners zum Button auf "Click"
        
        fieldset = <HTMLFieldSetElement>document.querySelectorAll("fieldset")[1];
        //direkte Zuweisung von fieldset zu HTMLFieldSetElement; querySelectorAll nimmt alle passenden CSS Selektoren im Dokument; die [1] sorgt dafür, dass nur die zweiten übereinstimmenden Werte übernommen werden
        
        fieldset.addEventListener("mouseover", clickHandler);
        //EventLIstener für Umwandlung des Mauszeigers während dem hovern über die Karte

        document.addEventListener("keydown", handleKeydown);
        //EventListener für keydown: Wird ausgelöst wenn User eine Taste drückt; wiederholt sich während Taste gedrückt gehalten wird

        window.setTimeout(handleTimeout, 2000);
        //Die Anzeige verändert sich erst nach 2 Sekunden (=2000 Millisekunden) im Fenster
    }

    function clickHandler(_event: MouseEvent): void {
        //erstellen einer Funktion ohne fest zugeordneten Wert
        logEvent(_event);
    }

    function handleKeydown(_event: KeyboardEvent): void {
        logEvent(_event);
    }

    function handleTimeout(_event: Event): void {
        logEvent(_event);
    }

    function logEvent(_event: Event): void {
        if (_event == undefined) {
            console.log("No event object passed");
            //logEvent ausführen, wenn _event = undefined; abprüfen aller logEvent(_event)
            return;
            //Rückgabewert ausgeben --> "No event object passed" ---> warum nochmal return?
        }
        console.group("EventInfo");
        //Start einer Nachrichtengruppe "EventInfo"; wird als Inlineelement ausgegeben; ab diesem Zeitpunkt werden alle Nachrichten in dieser Gruppe geschrieben, siehe nachfolgende Infos
        let info: string = "Type: " + _event.type;
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info);
        console.log(_event);
        //Ausgabe in der Konsole
        console.groupEnd();
        //Ende der Nachrichtengruppe "EventInfo"
    }
}