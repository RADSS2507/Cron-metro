const timer = document.querySelector('.timer');

const start = document.querySelector('.start');

const stop = document.querySelector('.stop');

const reset = document.querySelector('.reset');

let segundos = 0;

let time;

function criaSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciarCronometro(){
    time = setInterval(() => {
        segundos++;
        timer.innerHTML = criaSegundos(segundos)
    }, 1000)
}

start.addEventListener('click', () => {
    clearInterval(time)
    iniciarCronometro()
});

reset.addEventListener('click', () => {
    clearInterval(time)
    timer.innerHTML = '00:00:00'
    segundos = 0;
})

stop.addEventListener('click', () => {
    clearInterval(time)
})

