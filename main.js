var arr = ["Rock","Paper","Scissor"];
function random(){
var min = 0;
var max = 3;
var rand = Math.floor(min + (max-min)*Math.random());
return rand;
}
var you = document.querySelector(".player");
var computer = document.querySelector(".computer");
var won = document.querySelector(".text");
var playersc = document.querySelector(".three");
var computersc = document.querySelector(".four");
 function rock(){
     let player = "Rock";
     let comp = arr[random()];
    you.innerHTML = player;
    computer.innerHTML = comp;
 let audio = document.createElement('audio');
    audio.setAttribute('src',  "Bloop.mp3");
   audio.loop =false;
   audio.play()
    
    if(comp=="Rock"){
        won.innerHTML = "DRAW";
        won.style.color = "goldenrod";
        
    }
    else if(comp=="Paper"){
        won.innerHTML = "Aishik Win";
        won.style.color = "red";
        computersc.innerHTML = Number(computersc.innerHTML) +3;
        playersc.innerHTML = Number(playersc.innerHTML)-1;
       
        
    }
    else if(comp=="Scissor"){
        won.innerHTML = "You Win";
        won.style.color = "rgba(0, 173, 23, 0.678)";
        computersc.innerHTML = Number(computersc.innerHTML) -1;
        playersc.innerHTML = Number(playersc.innerHTML)  +3;
       
    }
 }
 function Scissor(){
     let player = "Scissor";
     let comp = arr[random()];
    you.innerHTML = player;
    computer.innerHTML = comp;
    console.log(comp);
    let audio = document.createElement('audio');
    audio.setAttribute('src',  "Bloop.mp3");
   audio.loop =false;
   audio.play()
    if(comp=="Scissor"){
        won.innerHTML = "DRAW";
        won.style.color = "goldenrod";
    }
    else if(comp=="Rock"){
        won.innerHTML = "Aishik Win";
        won.style.color = "red";
        computersc.innerHTML = Number(computersc.innerHTML) +3;
        playersc.innerHTML = Number(playersc.innerHTML)-1;
       
    }
    else if(comp=="Paper"){
        won.innerHTML = "You Win";
        won.style.color = "rgba(0, 173, 23, 0.678)";
        computersc.innerHTML = Number(computersc.innerHTML) -1;
        playersc.innerHTML = Number(playersc.innerHTML)  +3;
   
    }
 }
 function paper(){
     let player = "Paper";
     let comp = arr[random()];
    you.innerHTML = player;
    computer.innerHTML = comp;
    console.log(comp);
    let audio = document.createElement('audio');
    audio.setAttribute('src',  "Bloop.mp3");
   audio.loop =false;
   audio.play()
    if(comp=="Paper"){
        won.innerHTML = "DRAW";
        won.style.color = "goldenrod";
        
    }
    else if(comp=="Scissor"){
        won.innerHTML = "Aishik Win";
        won.style.color = "red";
        computersc.innerHTML = Number(computersc.innerHTML) +3;
        playersc.innerHTML = Number(playersc.innerHTML)-1;
       
    }
     
    else if(comp=="Rock"){
        won.innerHTML = "You Win";
        won.style.color = "rgba(0, 173, 23, 0.678)";
        computersc.innerHTML = Number(computersc.innerHTML) -1;
        playersc.innerHTML = Number(playersc.innerHTML)  +3;
     
    }
 }