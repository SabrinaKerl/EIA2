var L02;
(function (L02) {
    window.addEventListener("load", init);
    //F�ge einen EventListener f�r das ganze Fenster hinzu
    function init(_event) {
        //erstellen einer Funktion ohne fest zugeordneten R�ckgabewert
        console.log(_event);
        //gib das _event in der Konsole aus
        var fieldset = document.getElementsByTagName("fieldset")[0];
        //lass die Variable fieldset ein HTMLFieldSetElement sein und bei Aufruf des Dokuments nehme nochmal den Tagname "fieldset" und zwar von der ersten Stelle im Array
        fieldset.addEventListener("click", clickHandler);
        fieldset.addEventListener("click", clickHandler, true);
        //"true" steht f�r capturing phase / false steht f�r bubbling phase --> wird dann 
        var button = document.querySelector("button");
        //direkte Zuweisung auf Button-Element --> <...>
        button.addEventListener("click", clickHandler);
        //Hinzuf�gen des EventListeners zum Button auf "Click"
        fieldset = document.querySelectorAll("fieldset")[1];
        //direkte Zuweisung von fieldset zu HTMLFieldSetElement; querySelectorAll nimmt alle passenden CSS Selektoren im Dokument; die [1] sorgt daf�r, dass nur die zweiten �bereinstimmenden Werte �bernommen werden
        fieldset.addEventListener("mouseover", clickHandler);
        //EventLIstener f�r Umwandlung des Mauszeigers w�hrend dem hovern �ber die Karte
        document.addEventListener("keydown", handleKeydown);
        //EventListener f�r keydown: Wird ausgel�st wenn User eine Taste dr�ckt; wiederholt sich w�hrend Taste gedr�ckt gehalten wird
        window.setTimeout(handleTimeout, 2000);
        //Die Anzeige ver�ndert sich erst nach 2 Sekunden (=2000 Millisekunden) im Fenster
    }
    function clickHandler(_event) {
        //erstellen einer Funktion ohne fest zugeordneten Wert
        logEvent(_event);
    }
    function handleKeydown(_event) {
        logEvent(_event);
    }
    function handleTimeout(_event) {
        logEvent(_event);
    }
    function logEvent(_event) {
        if (_event == undefined) {
            console.log("No event object passed");
            //logEvent ausf�hren, wenn _event = undefined; abpr�fen aller logEvent(_event)
            return;
        }
        console.group("EventInfo");
        //Start einer Nachrichtengruppe "EventInfo"; wird als Inlineelement ausgegeben; ab diesem Zeitpunkt werden alle Nachrichten in dieser Gruppe geschrieben, siehe nachfolgende Infos
        var info = "Type: " + _event.type;
        info += " | target: " + _event.target;
        info += " | currentTarget: " + _event.currentTarget;
        info += " | phase: " + _event.eventPhase;
        console.log(info);
        console.log(_event);
        //Ausgabe in der Konsole
        console.groupEnd();
        //Ende der Nachrichtengruppe "EventInfo"
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=Aufg 3.js.map