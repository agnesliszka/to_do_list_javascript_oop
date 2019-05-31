function TodoList(name) {
// const TodoList = function(name) {
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

TodoList.prototype.handleKeyup = function(event) {
	event.preventDefault();
	// event.stopPropagation();
	this.addItem(event.keyCode, event.target);
}

TodoList.prototype.addItem = function(keyCode, target) {
	if(event.keyCode == 13 && event.target.value.trim().length > 0) {
		this.append();
		this.clearInput();			
		this.children = this.list.querySelectorAll('li');
	}
}

TodoList.prototype.handleListClick = function(event) {
	event.preventDefault();
	// event.stopPropagation();
	this.removeItem(event.target);
}

TodoList.prototype.removeItem = function(target) {
	if(target) {
		if(target.nodeName == 'BUTTON') {
			target.parentNode.parentNode.removeChild(target.parentNode);
			this.children = this.list.querySelectorAll('li');
		}
	}
};

TodoList.prototype.clearInput = function() {
	this.input.value = '';
}

TodoList.prototype.append = function() {
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
const todo = new TodoList('new_task');
todo.init();