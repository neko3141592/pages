'use strict'

let $doc = document;

let $head = $doc.getElementById('header');
let $headList = $doc.getElementById('header-list');

$doc.addEventListener('scroll' , () => {
    let y = window.scrollY;
    if(y < 10) {
        $head.style.opacity = 1;
    }
    else {
        $head.style.opacity = 0;
    }
});