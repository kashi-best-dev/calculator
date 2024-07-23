
// variables
{
let last_operator;
 }
//Entering numbers
{
function enter1(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+1
}
function enter2(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+2
}function enter3(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+3
}function enter4(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+4
}function enter5(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+5
}function enter6(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+6
}function enter7(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+7
}function enter8(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+8
}function enter9(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+9
}function enter0(){
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+0
}
}
//Functions for operations
{
function add(){
    last_operator="+"
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+"+"
}

function sub(){
    last_operator="-"
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+"-"   
}

function mut(){
    last_operator="*"
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+"*"  
}
function div(){
    last_operator="/"
    document.getElementById('display').innerHTML=document.getElementById('display').innerHTML+"/"
}
}

{//clear function
function cleared(){
    document.getElementById('display').innerHTML=""
}
}
//functions for answering
{
function equalto(){
    num_li=strint()
    a=num_li[0]
    b=num_li[1]
    switch(last_operator){
        case '+':
            document.getElementById('display').innerHTML=a+b
            break;
        case '-':
            document.getElementById('display').innerHTML=a-b
            break;
        case '*':
            document.getElementById('display').innerHTML=a*b
            break;
        case '/':
            document.getElementById('display').innerHTML=a/b
            break;
    }
    last_operator="="
}
function strint(){
    str=document.getElementById('display').innerHTML
    switch(last_operator){
        case "+":
            op_index=str.indexOf('+')
            a=Number(str.substring(0,op_index))
            b=Number(str.substring(op_index+1))
            return [a,b]
            break;
        case "-":
            op_index=str.indexOf('-')
            a=Number(str.substring(0,op_index))
            b=Number(str.substring(op_index+1))
            return [a,b]
            break;
        case "*":
            op_index=str.indexOf('*')
            a=Number(str.substring(0,op_index))
            b=Number(str.substring(op_index+1))
            return [a,b]
            break;
        case "/":
            op_index=str.indexOf('/')
            a=Number(str.substring(0,op_index))
            b=Number(str.substring(op_index+1))
            return [a,b]
            break;
        default:
            break;
    }

}
}

