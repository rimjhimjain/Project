/*console.log('This is tut 12');

let a = document;
// a =  document.all; //this will show all html tags used in file
a = document.head;
a = document.body;
// a = document.forms[2]; --> 
// Array.from(a).forEach(function(element){
    // console.log(element);})
    //a ki help s array bnalo or usko bnake k bd usko itrarte
// a = document.links;//use to find link
// a = document.images & document.scripts;
console.log(a);
*/


console.log('this is tut 14');
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.color='red';
// element.innerText = 'Harry is a good boy';
// console.log(element.innerText);

let sel=document.querySelector('#myfirst');
sel = document.querySelector('.child');
// console.log(sel);

// mutlielement
let ele=document.getElementsByClassName('child');
ele = document.getElementsByClassName('container');
ele = document.getElementsByTagName('div');
console.log(ele);

/*Array.from(elems).forEach(element =>{
    console.log(element);
    element.style.color='blue';
})*/