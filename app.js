let icon =  document.querySelector('.icon');
let menu =  document.querySelector('#menu');
let cross =  document.querySelector('.cross');


icon.addEventListener('click', function(){

    menu.classList.add('active')

});

cross.addEventListener('click', function(){

    menu.classList.remove('active');

});

menu.addEventListener('click', function(e){

    if(e.target.classList.contains('active')){

        menu.classList.remove('active');
    }

});

let show =  document.querySelector('.show');
let hide =  document.querySelector('.hide');
let inPass = document.querySelector('.in_pass');


show.addEventListener('click', function(){

    show.classList.add('icon_active');
    inPass.type = "password";


});

hide.addEventListener('click', function(){

    show.classList.remove('icon_active');
    inPass.type = "text";

});









