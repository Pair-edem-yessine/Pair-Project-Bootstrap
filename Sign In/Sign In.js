
var array = [] 
array[0] = localStorage.getItem('email')
array[1] = localStorage.getItem('pass')

function login(){ 
var inputedEmail = document.getElementById("email").value 
var inputedPass = document.getElementById("password").value

if ((array[0]===inputedEmail)&&(array[1]===inputedPass)){

window.location.assign("../todolist/todo.html")}

else { alert ("wrong coordinations") }
}

