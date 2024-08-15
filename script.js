


let btnMenu = document.getElementById('btn-menu');
let menu = document.querySelector('.nav-links')
let btn = document.getElementById('btn')

btnMenu.onclick = function() {
    btnMenu.classList.toggle('fa-times')
    menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if (this.scrollY >= 100) {
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    menu.classList.remove('active')
}

btn.addEventListener('click',function(e){
    e.preventDefault();
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    let body = 'fname: ' + fname + '<br/> lname: ' + lname + '<br/> phone: ' + phone + '<br/> email: '+
    email+ '<br/> message: ' +message;
    email.send({
        Host : "smtp.gmail.com",
        Username : "ghulamnabimughal24@gmail.com",
        Password : "lsidyxxufzjtqtio",
        To : 'ghulamnabimughal24@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert('Message sent successfully')
    );
})