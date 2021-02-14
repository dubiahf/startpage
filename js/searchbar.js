document.body.onkeyup = function(key){
    const searchbar = document.getElementById('search');
    //sprawdza czy uzytkownik nie wpisuje juz danych do jakiegos inputa
    if(document.activeElement.tagName !== "INPUT"){
        //sprawdza czy klikniety przycisk jest spacja
        if(key.keyCode == 32){
            searchbar.focus();
        }
    }
}