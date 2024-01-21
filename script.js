let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");



const gencompchoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});

const drawgame = () => {
    msg.innerText = "Game was Draw. Play again!"
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin , userchoice , compchoice) => {
    if(userwin){
        user_score.innerText = ++userscore;
        msg.innerText = `You Win! Your  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comp_score.innerText = ++compscore;
        msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) =>{
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
    }

    else{
        let userwin = true;
        if(userchoice === "rock"){
            if(compchoice === "paper"){
                userwin = false;
            }
        }
        else if(userchoice === "paper"){
            if(compchoice === "scissors"){
                userwin = false;
            }
        }
        else{
            if(compchoice === "rock"){
                userwin = false;
            }
        }
        showwinner(userwin , userchoice , compchoice);
    }
}