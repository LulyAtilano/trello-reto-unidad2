var task = document.getElementById('textInitial');
var saveTasks = document.getElementById('inputSave');

task.addEventListener('click', function() { 
    var hideFirstText = document.getElementById('textInitial');
    hideFirstText.style.display = 'none';
    var showForm = document.getElementById('tablero-lista');
    showForm.style.display = 'block';
});

saveTasks.addEventListener('click', function() {
    var container = document.getElementById('containerList');
    var littleContainer = document.createElement('div');
    var addNewA = document.createElement('a');
    addNewA.innerHTML = "Añadir una tarea...";

    var textSave = document.getElementById('inputText').value;
    document.getElementById('inputText').value = '';
    var commentSave = document.createTextNode(textSave);
    var titleList = document.createElement('h3');
    titleList.classList.add('titleList');
    var insertInput = document.createElement('input');
    insertInput.type = "button";
    insertInput.setAttribute('class', 'new-Input');
    insertInput.value = '';
    
    // Anidación de elementos
    titleList.appendChild(commentSave);
    littleContainer.appendChild(titleList);
    littleContainer.appendChild(insertInput);
    container.appendChild(littleContainer);
    container.appendChild(addNewA);
});

/*
var inputText = document.getElementById('inputText').value;
console.log(inputText); */

/*
function createList = {
    var mainContainer = document.getElementById('containerList');
    var container = document.createElement('section');
    var list = document.createElement('li');


    container.appendChild(list);
    mainContainer.appendChild(container);
} */