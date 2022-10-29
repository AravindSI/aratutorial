//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.links);
//console.log(document.getElementById("header-title"));
//var header-title =document.getElementById("header-title");
//var header=document.getElementById("main-header");
//header-title.textContent="hello";
//header-title.innerText="good bye";
//header-title.Style.borderBottom="Solid 3px #000";

//getelementsByClassName
var items=document.getElementsByClassName('list-group-item');
console.log(items);     
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
