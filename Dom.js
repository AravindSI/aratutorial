//querySelector
var input=document.querySelector('input');
input.value='Hello World';
var Submit=document.querySelector('input[type="Submit"]');
Submit.value="Aravind";
var item=document.querySelector(".list-group-item");
item.style.color='red';
var item=document.querySelector(".list-group-item:nth-child(2)");
item.style.color='green';
//queryselectorall
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}