var list = document.getElementById('list');

var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var i = list.getElementByTagName('li').length;
	element.innerHTML = 'Item' + i;
	list.appendChild(element);
});
