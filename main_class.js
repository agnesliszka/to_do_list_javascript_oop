class TodoList {
    constructor(name) {
	this.list = document.querySelector('[data-list="' + name + '"]');
	this.children = this.list.querySelectorAll('li');
	this.input = document.querySelector('[data-input="' + name + '"]');
	
	this.init = function() {

		
		this.input.addEventListener('keyup', function(event) {
			this.handleKeyup(event);
		}.bind(this));
		
		this.list.addEventListener('click', function(event) {
			this.handleListClick(event);
		}.bind(this));
	
		
		this.input.addEventListener('input', function(event) {
			this.handleInputChange(event);
		}.bind(this));
	};
};

handleKeyup(event) {
	event.preventDefault();
	// event.stopPropagation();
	this.addItem(event.keyCode, event.target);
}

addItem(keyCode, target) {
	if(event.keyCode == 13 && event.target.value.trim().length > 0) {
		this.append();
		this.clearInput();			
		this.children = this.list.querySelectorAll('li');
	}
}

handleListClick(event) {
	event.preventDefault();
	// event.stopPropagation();
	this.removeItem(event.target);
}

removeItem(target) {	
	if(target) {
		if(target.nodeName == 'BUTTON') {
			target.parentNode.parentNode.removeChild(target.parentNode);
			this.children = this.list.querySelectorAll('li');
		}
	}
};

clearInput() {
	this.input.value = '';
}

append() {
	const li = document.createElement('li');
	li.className = 'list-group-item';
	const btn = document.createElement('button');
	const span = document.createElement('span');
	span.innerHTML = this.input.value.trim();
	btn.className = "btn btn-secondary";
	btn.innerHTML = 'Delete';
	li.appendChild(span);
	li.appendChild(btn);
	this.list.appendChild(li);
};

}

const todo = new TodoList('new_task');
todo.init();