console.log('welcome')
let element = document.createElement('li');
// add a class name
element.className='childul';
element.id='createdLi';
element.setAttribute('title','mytitle');
element.innerText='Hello, this is created by me';
element.innerHTML='<b>Hello, this is created by me,</b>';


let ul = document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(ul);
// console.log(element);
 

// node types
// 1-element
// 2-attribute
// 3-text node
// 8-comment
// 9-document
// 10-docType