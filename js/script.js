'use strict';

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// modal
const exit = document.querySelector('.exit');

exit.addEventListener('click', ()=>{
    click.classList.toggle('none');

});


const table = document.querySelectorAll('.first-service'),
    click = document.querySelector('.part-click'),
    fix = document.getElementById('fix'),
    space_phone = document.querySelector('.space_phone');

table.forEach((e) => {
    e.addEventListener('click', () => {
        click.classList.toggle('none');
    });
});
fix.addEventListener('click', () => {
    click.classList.toggle('none');

});

function close(space_phone) {
    space_phone.classList.remove('none');
}
fix.addEventListener('click', () => {
    space_phone.classList.toggle('none');
    // setTimeout(thanks.classList.add('remove'), 5000)
    setTimeout(function () {
        space_phone.classList.toggle('none');
    }, 5000);
});



const nav= document.getElementById('nav-icon2'),
      ul = document.querySelector('.drop');
nav.addEventListener('click', () =>{
    nav.classList.toggle('open');
    ul.classList.toggle('none');
})

