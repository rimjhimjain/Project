console.log('This is tutorial 8');
const age =45;


/* * == -->sirf value ko eql krta hai
   * === --> value and datatype dono ko  check krta hai... dono eql h ya nhi
   * agr sirf "if" lgaya hai to vo sari statements run krega end tk
   * agr "if else " use kia h to toh agr bich m statement true ho jti h to vo vhi ruk jayega or age check nhi krega
   * &&(and) --> dono condition true honi chahaiye
   * ||(or) --> dono m se3 kisi ek ko true hona compulsion hai*/  


/*if (age !=19)
{
    console.log('Age is not 19')
}
else if('Age is 65'){
    console.log('Age is not 65')
}
else{
    console.log('Age is not 19 ')
}

console.log(age==45? 'Age is 45': 'age is not 45');//condition? 'if true then print':'if false thn print'*/



switch(age){
    case 18:
        console.log("You are 18")
        break;
    case 28:
        console.log("You are 28")
            break;
    case 38:
        console.log("You are 38")
        break;    
        default:
        console.log("You are unknown age")
            break;//agr break hta denge to break k bad k sare statements o print krega vo
}