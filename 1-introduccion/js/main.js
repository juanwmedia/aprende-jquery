/*
var elemento = document.querySelector('h1');
var timeout = setTimeout(function () {
    elemento.innerHTML = 'Hola desde DOPodcast!';
}, 1000)*/

var elemento = jQuery('h1');
var timeout = setTimeout(function () {
    elemento.text('Hola desde DOPodcast con jQuery!');
}, 1000);