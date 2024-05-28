'use strict';


const answer = [
    "It is certain",
    "Without a doubt",
    "You may  rely on it",
    "Yes definitely",
    "It is decidedly",
    "As i see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Signs point to no",
    "Reply hazy try again"
];
// document.getElementById("magic").innerHTML=answer;

function myFunction(){
    answer.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("magic").innerHTML=answer[0];
    document.getElementById("magic").style.fontsize="1px";
    setTimeout(timeup, 4000);

    function timeup(){
        document.getElementById("magic").innerHTML="8";
        document.getElementById("magic").style.fontsize="1px";
        document.getElementById("question").value="";

    }
    // add a handler for submitting the form handler will call the function
        
}
myFunction();