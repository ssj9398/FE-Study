var preText = document.querySelector("#pre-text");
var aftText = document.querySelector("#aft-text");

preText.onkeyup = () => {
    console.log("a");
    if (window.event.keyCode == 13) {
        preText.replaceChild("&nbsp", " ");
        aftText.value = preText;
        aftText.select();
        //copyText.setSelectionRange(0, 99999);
        document.execCommand("Copy");
    }
}

