const config = {
	classShow: 'show',
	classHide: 'hide'
};

const TodoList = function(name) {
	this.list = document.querySelector('[data-list="' + name + '"]');
	this.childs = this.list.querySelectorAll('li');
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
	event.stopPropagation();
	this.addItem(event.keyCode, event.target);
}

TodoList.prototype.addItem = function(keyCode, target) {
	if(event.keyCode == 13 && event.target.value.trim().length > 0) {
		this.append();
		this.clearInput();			
		this.childs = this.list.querySelectorAll('li');
	}
}

TodoList.prototype.handleListClick = function(event) {
	event.preventDefault();
	event.stopPropagation();
	this.removeItem(event.target);
}

TodoList.prototype.removeItem = function(target) {
		
	
	if(target) {
		if(target.nodeName == 'BUTTON') {
			target.parentNode.parentNode.removeChild(target.parentNode);
			this.childs = this.list.querySelectorAll('li');
		}
	}
};

TodoList.prototype.handleInputChange = function(event) {
	const value = event.target.value;
	event.preventDefault();
	event.stopPropagation();
	this.findItem(value);
}

TodoList.prototype.findItem = function(value) {
	const find = false;
	
	for(const i = 0;i < this.childs.length;i++) {
		this.childs[i].className = config.classHide;
	}
	
	for(const i = 0;i < this.childs.length;i++) {
		const nowEl = this.childs[i];
		if(nowEl.firstChild.innerText.indexOf(value) != -1) {
			nowEl.className = config.classShow;
			find  = true;
		}
	}
	
	if(!find) {
		for(const i = 0;i < this.childs.length;i++) {
			this.childs[i].className = config.classShow;
		}
	}
};

TodoList.prototype.clearInput = function() {
	this.input.value = '';
}

TodoList.prototype.append = function() {
	const oLi = document.createElement('li');
	const oBtn = document.createElement('button');
	const oSpan = document.createElement('span');
	oSpan.innerHTML = this.input.value.trim();
	oBtn.innerHTML = 'delete';
	oLi.appendChild(oSpan);
	oLi.appendChild(oBtn);
	this.list.appendChild(oLi);
};
const todo = new TodoList('work');
todo.init();