document.getElementById('button1').addEventListener('click',function(){
var firstname=document.getElementById('first').value
 var lastname=document.getElementById('last').value
 var  adressemail=document.getElementById('email').value
 var password=document.getElementById('pass').value
 var confirmpassword=document.getElementById('confirmpass').value  
 if (password!==confirmpassword) {
    alert('you must enter the same password!')
return
 } 

 localStorage.setItem('first',firstname)
 localStorage.setItem('last',lastname)
 localStorage.setItem('email', adressemail)
 localStorage.setItem('pass', password)

 alert('Sign up successful! You can now sign in.');

window.location.assign("../Sign In/Sign In.html");
})
