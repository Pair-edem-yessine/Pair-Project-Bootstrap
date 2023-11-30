const email = localStorage.getItem('email',input.value)
const password = localStorage.getItem('pass',input.value)

var inputedEmail = document.getElementById("email").value;
var inputedPassword = document.getElementById("pass").value;  


document.getElementById("button1").addEventListener('click',function(){

if((email===inputedEmail)&&(password===inputedPassword)){
    alert('Hello , there');
    window.location.href = "https://www.youtube.com/watch?v=zhI4D4DdKuY";
}

else {'Thats wrong coordinations'}

})