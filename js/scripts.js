const form = document.getElementById('task-form');

// taskList é a div que conterá a lista de tarefas //
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
    console.log('texto digitado:',inputField.value);
	form.reset();
};

function addTask(description) {
	// taskContainer será uma div da classe task-item //
    const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);
    // para excluir um elemento da lista //
    const delButton = document.createElement('button');
    const textButton = document.createTextNode('x');
    delButton.setAttribute('name','delButton');
    delButton.setAttribute('id','delButton');
    delButton.appendChild(textButton);
    delButton.setAttribute('onclick','removeTask()');    

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

    // aqui ele adiciona o nome da classe task-item à div taskContainer //
	taskContainer.classList.add('task-item');
    // aqui ele adiciona o elemento input checkbox a esta div, como um filho //
	taskContainer.appendChild(newTask);
    // aqui ele adiciona o elemento label a esta div, como um filho //
	taskContainer.appendChild(taskLabel);
    // aqui ele adiciona o elemento button a esta div, como um filho //
    taskContainer.appendChild(delButton);
    // aqui ele adiciona esta div como filha da div taskList //
	taskList.appendChild(taskContainer);

    // Exemplo de como vai ficar essa div:
    //  <div class="task-item">
	//      <input type="checkbox" name="estudar" id="estudar">
	//      <label for="estudar">estudar</label>
    //  </div>
    
}

