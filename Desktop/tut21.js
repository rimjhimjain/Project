console.log('This is tutorial 21');
/* 
you have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div,it should be converted into an editable item. whenever user click away (blur) . save the note into the local storage.


// var ele = document.createElement('div');
// ele.style.cssText='position: absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000';
// console.log(ele);

let newDivElement = document.createElement('div');
newDivElement.id = "heading";
document.body.appendChild(newDivElement);
let newHeaderElement = document.createElement("h3");
newHeaderElement.innerText = "Code with Harry";
newDivElement.appendChild(newHeaderElement);
let newInputElement = document.createElement("input");
newInputElement.id = "inputText";
newDivElement.appendChild(newInputElement);

let element = document.getElementById("inputText");
//console.log(element.nodeValue);
element.addEventListener('blur',function(){
    localStorage.setItem("newValue",element.value)
});
element.value = localStorage.getItem("newValue");*/

 //I add a new highLighting text feature on the text.
// Creating a new Div element


/*let div = document.createElement('div');
div.setAttribute('id','edit')
div.innerText = "Double Click on me to Edit";

// It will increase the text size when mouseover on it.
div.addEventListener('mouseover',function(){
    div.style.fontSize = '150%'
})

// Appending the element to the body
// document.createTextNode(div);
// document.body.append(div);

// Creating the editable element
//Whenever someone double click on the text it will turn to editable.
let inpt = document.createElement('input');
inpt.setAttribute("value","") 
document.getElementById('edit').addEventListener('dblclick',function(){
    div.replaceWith(inpt)
});

// Click outside to save the text into local storage as (Edited) name.
inpt.addEventListener('blur',function(){
    localStorage.setItem('Edited',JSON.stringify(inpt.value))
})*/

let divele =document.createElement('div');
let container = document.querySelector('.container');
let first = document.getAnimations('myfirst');
console.log(divele,container,first)
