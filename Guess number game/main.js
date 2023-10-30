const random=(parseInt(Math.random() * 100+1));
const submit=document.querySelector('#sub');
const user=document.querySelector('#guessFiled');
const guess=document.querySelector('.guesses');
const last=document.querySelector('.last');
const low=document.querySelector('.low');
const para=document.querySelector('.resultpara');

const p=document.createElement('p');

let pre=[];

let play=true;
if(play){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(user.nodeValue)
        console.log(guess)
        valid(guess)
    })
}
function valid(guess){

}

function check(guess){

}

function displayguess(guess){

}

function display(msg){

}

function newg(){

}

function endg(){

}