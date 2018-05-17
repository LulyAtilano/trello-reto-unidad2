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
    
    var hideForm = document.getElementById('tablero-lista');

    // Anidación de elementos
    titleList.appendChild(commentSave);
    littleContainer.appendChild(titleList);
    container.appendChild(littleContainer);
    container.appendChild(addNewA);
    hideForm.style.display='none'; //formulario escondido

    addNewA.addEventListener('click', function() {
        var task = document.createElement('textarea');
        task.id="inputText";
        var cancel = document.createElement('button');
        cancel.classList.add('buttonCancel');
        var addNewTask = document.createElement('button');
        addNewTask.classList.add('buttonAdd');
        var space = document.createElement('br');
        var saveTasksContainer = document.createElement('div');
        saveTasksContainer.id= 'saveTasksContainer';
        var addTasksContainer = document.createElement('div');

        var NameButtonCancel = document.createTextNode('X');
        var NameButtonAdd = document.createTextNode('Añadir');

        // Anidación de tareas en el Div anterior.
        cancel.appendChild(NameButtonCancel);
        addNewTask.appendChild(NameButtonAdd);

        addTasksContainer.appendChild(task);
        addTasksContainer.appendChild(space);
        addTasksContainer.appendChild(addNewTask);
        addTasksContainer.appendChild(cancel);
        // Anidar los 2 contenedores en container
        container.removeChild(addNewA);//elimina añadir tarea
        container.appendChild(saveTasksContainer);
        container.appendChild(addTasksContainer);

        addNewTask.addEventListener('click', function() {
            var save = document.createElement('p');
            var newTask = task.value;
            var textNewTask = document.createTextNode(newTask);

            // Se guardan las tareas en el contenedor interno.
            save.appendChild(textNewTask);
            saveTasksContainer.appendChild(save);
            saveTasksContainer.appendChild(addTasksContainer);
        });

    });

}); 