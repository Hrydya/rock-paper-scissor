let moves=document.querySelectorAll(".moves");
let scoreno=document.querySelector(".scoreno");
let score1 =document.querySelector("#score1");
let score2=document.querySelector("#score2");
let scorer=document.querySelector(".scorer");
let scorer1=document.querySelector("#scorer1");
let scorer2=document.querySelector("#scorer2");
let p=document.querySelector(".text p");
let text=document.querySelector(".text");

//bot's move
let  botmove=()=>{
    const choices=["rock","paper","scissor"];
    const random_index=Math.floor(Math.random()*3);
    return choices[random_index];
}
    moves.forEach(move =>{
        move.addEventListener("click",(event)=>{

            let botchoice=botmove();
            //if we choose rock
            if(event.target.id==="rock"){
                if (botchoice==="rock"){
                    console.log("It's a draw ")
                    p.innerText="It's a draw ";
                    text.style.backgroundColor="#060223";

                }
                else if(botchoice=== "paper"){
                    console.log("You lost! paper beats rock");
                    p.innerText="You lost! paper beats rock";
                    text.style.backgroundColor="red";
                    score2.innerText=parseInt(score2.innerText)+1;
                    
        
                }
                else if(botchoice==="scissor"){
                    console.log("You won! rock beats scissor");
                    p.innerText="You won! rock beats scissor";
                    text.style.backgroundColor="green";
                    score1.innerText=parseInt(score1.innerText)+1;
                }
            }
            //if our choice is paper
            else if(event.target.id==="paper"){
                if (botchoice==="rock"){
                    console.log("You won! paper beats rock ");
                    p.innerText="You won! paper beats rock";   
                      text.style.backgroundColor="green";
                    score1.innerText=parseInt(score1.innerText)+1;
                }
                else if(botchoice=== "paper"){
                    console.log("It's  a draw");
                    p.innerText="It's a draw";
                    text.style.backgroundColor="#060223";
        
                }
                else if(botchoice==="scissor"){
                    console.log("You lost! scissor beats paper");
                    p.innerText="You lost! scissor beats paper";
                    text.style.backgroundColor="red";
                }
            }
            //if we choose scissor
            else if(event.target.id==="scissor"){
                if (botchoice==="rock"){
                    console.log("You lost! rock beats scissor ");
                    p.innerText="You lost! rock beats scissor";
                    text.style.backgroundColor="red";
                    score2.innerText=parseInt(score2.innerText)+1;
                }
                else if(botchoice=== "paper"){
                    console.log("You won! scissor beats paper");
                    p.innerText="You won! scissor beats paper";
                    text.style.backgroundColor="green";
        
                }
                else if(botchoice==="scissor"){
                    console.log("It's  a draw");
                    p.innerText="It's a draw";
                    text.style.backgroundColor="#060223";
                 
                }
            }
        });
    });
    

