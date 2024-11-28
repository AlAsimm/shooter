const gameContainer = document.getElementById('game-container')
const scoreboard= document.getElementById('score-board')
const timerdisplay= document.getElementById('timer')
const gameoverscreen= document.getElementById('game-over')
const finalscoredisplay= document.getElementById('final-score')

let score = 0
let timeleft = 30;
let timer ;
let targets = []
const TOTAL_TARGET = 3

function createtargets(count) {

    for (let i = 0; i < count; i++){
        const target = document.createElement('div');
        target.classList.add('target')

        const containerrect = gameContainer.getBoundingClientRect();

        const x = Math.max(0, Math.min(

            containerrect.width - 50,
            Math.random() * containerrect.width

        ))

        const y = Math.max(0, Math.min(

            containerrect.height - 50,
            Math.random() * containerrect.height

        ))
        
        // math.max(0, 15)

        target.style.left = `${x}px`
        target.style.top = `${y}px`

        target.addEventListener('click', hittarget);

        gameContainer.appendChild(target);

        target.offsetWidth;
        
        target.classList.add('active')


        targets.push(target)
    }
}

function hittarget(e){
    score += 10
    scoreboard.textContent = `score: ${score}`;

    e.target.classList.add('destroy')

    const index = targets.indexOf(e.target)
    if(index > -1){
        targets.splice(index, 1)

        e.target.remove();

    }

    if (targets.length == 0){
        createtargets(TOTAL_TARGET);
    }

}


function updateTimer(){
    timeleft--;
    timerdisplay.textContent = `time : ${timeleft}`

}

function startgame(){
    score = 0
    timeleft = 30 
    scoreboard.textContent = 'score: 0'
    timerdisplay.textContent = 'time: 30'
    gameoverscreen.textContent = 'none';

    createtargets(TOTAL_TARGET);

    timer = setInterval(updateTimer, 1000);
    
}

startgame();
