document.getElementById('submitBtn').addEventListener('click', function(){
   const myEmail= document.getElementById('email');
   const getEmail=myEmail.value;
   const myPassword =document.getElementById('this-password');
   const myVpass=myPassword.value ;

   if(getEmail=== 'rabbanisarkar642@gmail.com'&& myVpass==='rabbi'){
    window.location.href='bank.html'
   } else{
    alert('invalid user')
   }

})




