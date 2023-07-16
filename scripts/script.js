'use strict'

let $doc = document;

let $head = $doc.getElementById('header');
let $headList = $doc.getElementById('header-list');
let $title = $doc.getElementById('title');
let $his = $doc.getElementById('his');

let height = window.innerHeight;
let width = window.innerWidth;

function headChange (y) {
    if(y < 10) {
        $head.style.opacity = 1;
    }
    else {
        $head.style.opacity = 0;
    }
}

function titleChange (y) {
    $title.style.opacity = (height/2-y)/(height/2);
    $title.style.transform = `rotateX(${y/20}deg) rotateY(${y/20}deg)`
    $head.style.transform = `rotateX(${Math.min(y/2 , 30)}deg) rotateY(${Math.min(y/2 , 30)}deg)`
}

$doc.addEventListener('scroll' , () => {
    let y = window.scrollY;
    headChange(y);
    titleChange(y);
});