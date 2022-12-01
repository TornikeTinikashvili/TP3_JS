// let b = document.body;
document.body.style.backgroundColor = 'grey';
let ms = document.getElementById('ms');
let sc = document.getElementById('second');
let mt = document.getElementById('minute');
let hr = document.getElementById('hour');
let timerStart = document.getElementById('start');
let timerStop = document.getElementById('stop');
let timerReset = document.getElementById('reset');
let interval;

timerStart.addEventListener('click', start);
timerStop.addEventListener('click', stop);
timerReset.addEventListener('click', reset);

function start(){
    clearInterval(interval);
    interval = setInterval(startTimer,10);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    ms.innerHTML="00 ms";
    sc.innerHTML="00 sec";
    mt.innerHTML="00 min";
    hr.innerHTML="00 hr";
}
function startTimer(){
    ms.innerHTML = parseInt(ms.innerHTML) + 10 + " ms";
        if(ms.innerHTML.includes(1000)){
            ms.innerHTML = 00;
            sc.innerHTML = parseInt(sc.innerHTML) + 1 + " sec";
            if(sc.innerHTML.includes(60)){
                sc.innerHTML = 00 + " sec";
                mt.innerHTML = parseInt(mt.innerHTML) + 1 + " min";
                if(mt.innerHTML.includes(60)){
                    mt.innerHTML = 00 + " min";
                    hr.innerHTML = parseInt(hr.innerHTML) + 1 + " hr";
                }
            }
        }
    }
