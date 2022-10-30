

//Traversing the dom
var itemList=document.querySelector('#items');
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='f4f4f4';
console.log(itemList.parentElement.parentElement);
//lastelementchild
console.log(itemList.lastElementChild);
//lastchild
console.log(itemList.lastChild);
itemList.lastChild.textContent='hello';
//createchild
console.log(itemList.children);
//lastelementchild
console.log(itemList.lastElementChild);
//firstChild
console.log(itemList.firstChild);
//nextSibling
console.log(itemList.nextElementSibling);
console.log(itemList.nextSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);
//createElement
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello9';
newDiv.setAttribute('title','helloworld');
//create textNode
var newDivText=document.createTextNode('hello worldd');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);
/*
parentNode=document.getElementById('items');
helloWorldLiElement='<li>hello</li>';
parentNode.appendFirstChild(helloWorldLiElement);
parentNode.innerhtml='<li>hello</li>'+parentNode.innerhtml;
*/




