let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score")
const compScorepara=document.querySelector("#computer-score")

const gencomputerchoice = () => {
    const gameoptions = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return gameoptions[randIdx];
}
const drawgame=()=> {

    msg.innerText="game was draw";
};
const showWinner = (userWin,userChoice,compchoice)=> {
if(userWin){
    userscore++;
    userScorepara.innerText= userscore;
    console.log("you win");
    msg.innerText="you win";
}else{
    computerscore++;
     compScorepara.innerText= computerscore

    msg.innerText="you lose";
}
}


const playgame = (userChoice) => {
     console.log("user choice = ",userChoice);
     const compchoice = gencomputerchoice();
     console.log("compchoice=",compchoice);

if(userChoice === compchoice){
    drawgame();
}else{
    let userWin = true;
    if(userChoice== "rock"){
        userWin = compchoice === "paper"? false : true ;
    } else if (userChoice === "paper"){
        userWin = compchoice=== "scissor"?false:true;
    }else{
      userWin=  compchoice === "rock"? false: true;

    }
    showWinner(userWin);
}

};
const choiceBtns=document.querySelectorAll(".choice")

choiceBtns.forEach((choice) => {
choice.addEventListener( "click",(e) => {
    const userChoice = e.currentTarget.id;
    console.log("user choice=",userChoice);
    playgame(userChoice);

});

});
