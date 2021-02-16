const linkForm = document.querySelector('.link');

const linkName = document.querySelector('.link-name');

const linkURL = document.querySelector('.link-url');

const linkItems = document.querySelector('.link-items');

let links = [];

linkForm.addEventListener('submit', function(){
    addLink(linkName.value, linkURL.value);
    $('#newLinkModal').modal('hide');
})

//addLink
function addLink(item1, item2){
    if(item1 !== '' && item2 !== ''){
        var item3 =  "https://s2.googleusercontent.com/s2/favicons?domain="+item2;
        const link={
            id: Date.now(),
            name: item1,
            url: item2,
            favicon: item3
        };

        links.push(link);
        addLinkToLocalStorage(links);

        linkName.value = '';
        linkURL.value = '';
    }
}

//renderLinks
function renderLinks(links){
    linkItems.innerHTML = '';

    links.forEach(function(item){
        const li = document.createElement('li');
        li.setAttribute('class', 'm-4 text-center');
        li.setAttribute('data-key', item.id)

        li.innerHTML=`
            <a class="text-center" href="${item.url}">
                <img class="favicon" src=https://s2.googleusercontent.com/s2/favicons?domain=${item.url}>
                <br>
                ${item.name}
            </a>
        `;

        linkItems.append(li);
    });
}

//addLinkToLocalStorage
function addLinkToLocalStorage(links){
    localStorage.setItem('links', JSON.stringify(links));

    renderLinks(links);
}

//getLinkFromLocalStorage
function getLinkFromLocalStorage(){
    if(localStorage.getItem('links')){
        links = JSON.parse(localStorage.getItem('links'));

        //po utworzeniu 12 skrotow zabiera mozliwosc tworzenia nowych
        if(links.length >= 12){
            const btn = document.querySelector('.editBtn');
            
            btn.setAttribute('class', 'd-none');
        }

        renderLinks(links);
    }
}

//deleteLinks
function deleteLinks(){
    //usuwa linki z pamięci i odświeża stronę
    localStorage.removeItem('links');
    location.reload();
}

getLinkFromLocalStorage();