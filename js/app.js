var task = document.getElementById('textInitial');

task.addEventListener('click', function() { 
    var hideFirstText = document.getElementById('textInitial');
    hideFirstText.style.display = 'none';
    var showForm = document.getElementById('tablero-lista');
    showForm.style.display = 'block';
});

/*
function createList = {
    var mainContainer = document.getElementById('containerList');
    var container = document.createElement('section');
    var list = document.createElement('li');


    container.appendChild(list);
    mainContainer.appendChild(container);
} */