const log = (x) => console.log(x);

let i = 0;
const title = $('header h1').text();
$('header h1').text('');
log(title);
let newTitle = '';

$(document).ready( ()=> {
    typeLetter();
})

function typeLetter() {
    if (i < title.length) {
        newTitle += title.charAt(i);
        $('header h1').text(newTitle);
        i++;
    }
    setTimeout(typeLetter, 75);
}


// - -Sticky navbar test - -
// window.onscroll = function() {
//     this.stickyToggle();
// }

// // const navBarPosition = $('.nav').offsetTop;
// const navBar = document.querySelector('header')
// const navBarPosition = navBar.offsetTop;

// log(navBarPosition)

// function stickyToggle() {
//     if (window.pageYOffset >= navBarPosition) {
//         navBar.classList.add('sticky');
//     } else {
//         navBar.classList.remove('sticky');
//     }
// }