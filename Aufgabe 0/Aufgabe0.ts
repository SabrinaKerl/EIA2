function box(){
    var input = prompt ("Hi, verrätst Du mir Deinen Namen?", "");
    if (input != null){
        document.getElementById ("Hi").innerHTML = "Danke Dir " + input;
        }
    }