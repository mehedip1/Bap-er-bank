console.log('login in js file');
document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);

    if(email === 'sontan@baap.com' && password === 'Tondra15'){
        window.location.href = 'bank.html'
    }
    else{
        alert('wrong password');
    }
}) 