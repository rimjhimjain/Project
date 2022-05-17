console.log('This is tutorial 20');

let newa = ['pyaj','bhindi','adrak'];

localStorage.setItem('Name', 'Rimjhim' )
localStorage.setItem('Branch', 'cse' )
localStorage.setItem('Group', '28' )
localStorage.setItem('Batch', '2021' )
localStorage.setItem('sabzi',JSON.stringify(newa));
localStorage.removeItem('Batch');
let nam = localStorage.getItem('Batch');
console.log(nam);
// localStorage.clear();
nam = JSON.parse(localStorage.getItem('sabzi'));

console.log(newa);