/*console.log("This is tutorial 17 on events");

document.getElementById("heading").addEventListener("click",function(e){
    let variable;
    console.log("Your have clicked the heading");
    variable=e.target.id;
    variable=e.offsetX;
    variable=e.offsetY;
    variable=e.clientX;
    variable=e.clientY;
    console.log(variable);
});
*/

console.log("This is tutorial 18 on events");
let btn = document.getElementById('btn');
btn.addEventListener('click,func1');
function func1(e){
    console.log("Thanks",e);
}