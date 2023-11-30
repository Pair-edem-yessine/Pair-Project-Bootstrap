document.getElementById('button1').addEventListener('click',function(){
   console.log('hello')
var firstname=document.getElementById('first').value
 var lastname=document.getElementById('last').value
 var  adressemail=document.getElementById('email').value
 var password=document.getElementById('pass').value
 var confirmpassword=document.getElementById('confirmpass').value  
 if (password!==confirmpassword) {
    alert('you must enter the same password!')
return
 } 
 console.log("ge")

 localStorage.setItem('first',firstname)
 localStorage.setItem('last',lastname)
 localStorage.setItem('email', adressemail)
 localStorage.setItem('pass', password)

 alert('Sign up successful! You can now log in.');

window.location.href="../Sign In/Sign In.html";
})
