const todoDiv = document.querySelector('.todo');

const todoInput = document.querySelector('.todo-input');

const todoItems = document.querySelector('.todo-items');

let todos = [];

//event listener od forma 
todoDiv.addEventListener('submit', function(event){
  // strona sie nie odswieza kiedy kliknie sie w przycisk
  event.preventDefault();
  addTodo(todoInput.value);
})


//addTodo 
function addTodo(item){
  //jezeli item nie jest pusty
  if (item !== '') {
    // tworzymy obiekt todo
    const todo={
      id: Date.now(),
      name: item,
      completed: false
    };

    // wrzuca obiekt todo do arraya todos
    todos.push(todo);
    addToLocalStorage(todos);

    //czysci input
    todoInput.value = '';
  }
}

//renderTodos
function renderTodos(todos){
  // czysci wszystko co jest w liscie ul
  todoItems.innerHTML = '';

  todos.forEach(function(item){
    //sprawdza czy zadanie z todo jest oznaczone jako skonczone
    const checked = item.completed ? 'checked': null;

    //stworz li i wypelnij go
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    
    if (item.completed === true){
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;

    //dodaj li do ul
    todoItems.append(li);
  });
}

// addToLocalStorage
function addToLocalStorage(todos){
  //przerob array na string 
  localStorage.setItem('todos', JSON.stringify(todos));

  renderTodos(todos);
}

// getFromLocalStorage
function getFromLocalStorage(){
  //jezeli cos jest w local storage
  if(localStorage.getItem('todos')){
    //konwertuje ze stringa spowrotem w array
    todos = JSON.parse(localStorage.getItem('todos'));
    //wrzuca w html
    renderTodos(todos);
  }
}

// checked / czy zrobione
function toggle(id){
  todos.forEach(function(item){
    if(item.id == id){
      item.completed = !item.completed;
    }
  });

  //aktualizuje localstorage
  addToLocalStorage(todos);
}

// deleteTodo
function deleteTodo(id){
  //szuka li z id i aktualizuje array todos
  todos = todos.filter(function(item){
    return item.id!=id;  
  });

  addToLocalStorage(todos);
}

getFromLocalStorage();

todoItems.addEventListener('click', function(event){
  //sprawdza czy kliknieto checkbox
  if(event.target.type === 'checkbox'){
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  //sprawdza czy kliknieto x
  if(event.target.classList.contains('delete-button')){
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

