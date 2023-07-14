'use strict'

let request = new XMLHttpRequest();
let data;

async function gets() {

    const data = await fetch('https://script.google.com/macros/s/AKfycbyOEzub_UX-nEISIiwk2d1oFsBVKw6w5Sqg28g7k_l7_t3nVSeHz_x5PTb0f4pJk0vi/exec?name=yudai25n');
    let res = await data.json();
    let len = res.length;

    let $rat = $doc.getElementById('atcoder');
    let rating = res[len-1].Rating;
    let colors = ['#808080' , '#804000' , '#008000' , '#00C0C0' , '#0000FF' , '#C0C000' , '#FF8000' , '#FF0000' , '#FF0000' , '#FF0000' , '#FF0000' , '#FF0000'];

    $rat.style.color = (colors[Math.floor(rating/400)]);

    let $his = document.getElementById('history');

    for(let i = len-1; i >= 0; i--){
        //DOM
        let $add = $doc.createElement('div');
        let $title = $doc.createElement('h2');
        let $perf = $doc.createElement('span');
        let $ch = $doc.createElement('p');
        //Num
        let oldRat , newRat , newPerf , diff;
        if(i != 0) {
            oldRat = res[i-1].Rating;
        } else {
            oldRat = 0;
        }

        newRat = res[i].Rating;
        newPerf = res[i].Performance;
        diff = newRat - oldRat;

        $title.textContent = res[i].Name;
        $ch.textContent = `${oldRat} -> ${newRat} (${diff < 0 ? '' : (diff == 0 ? '±' : '+')}${diff}) / Performance:`;
        $perf.textContent = newPerf;
        $perf.style.color = (colors[Math.floor(newPerf/400)]);
        $ch.appendChild($perf);
        $add.appendChild($title);
        $add.appendChild($ch);
        $his.appendChild($add);
    }

}

gets();