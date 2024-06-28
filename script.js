const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const guestButton=document.getElementById('guestButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
const guestForm=document.getElementById('guest');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
guestButton.addEventListener('click', function(){

})