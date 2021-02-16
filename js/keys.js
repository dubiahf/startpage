document.body.onkeyup = function(key){
    const searchbar = document.getElementById('search');
    links1 = JSON.parse(localStorage.getItem('links'));
    //sprawdza czy uzytkownik nie wpisuje juz danych do jakiegos inputa
    if(document.activeElement.tagName !== "INPUT"){
        //sprawdza czy klikniety przycisk jest spacja
        if(key.keyCode == 32){
            searchbar.focus();
        }
        //po kliknieciu 'n' wyswietla sie modal do dodawania nowego skrotu 
        if(key.keyCode == 78 && (links1 === null || links1.length < 12)){
            $('#newLinkModal').modal('show');
        }
        //po kliknieciu 't' wysuwa sie todo
        if(key.keyCode == 84){
            $('#todoList').collapse('toggle');
        }
    }
}