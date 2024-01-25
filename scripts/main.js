// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu)


// function getCurrentURL () {
//     return window.location.href
//   }
  
//   // Example
//   const url = getCurrentURL()
  
// console.log(url);


// if (url.includes('index')) {
//     console.log('active');
//     setTimeout(console.log(document.getElementById('index')), 3000)
//     setTimeout(document.getElementById('index').classList.add('active'), 3000)
// }
// else if (url.includes('w01')) {
//     console.log('active');
//     console.log(document.getElementById('w01'));
//     document.getElementById('w01').classList.add('active');
// }