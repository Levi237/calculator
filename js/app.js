console.log("test");

// CALCULATOR
// User Stories
// Hey! It's a new vocabulary word!

// User stories are a great way to break down what the different features of the website are, and how to structure it. They are generally written out in this form "A user should be able to...". Here are the user stories for our lab:

// A user should be able to select numbers so that they can do things with them.
// A user should be able to add numbers together.
const add = (num1, num2) => {
    return num1 + num2
}
// A user should be able to subtract numbers.
const subtract = (num1, num2) => {
    return num1 - num2
}
// A user should be able to divide numbers.
const divide = (num1, num2) => {
    return num1 / num2
}
// A user should be able to multiply numbers together.
const multiply = (num1, num2) => {
    return num1 * num2
}
// A user should be able to see the output.
//---> need window to produce value
// A user should be able to clear errant input in the middle of a calculation.
//---> need clear new input button
//---> need clear all button

// create <div id="calculatorShell"></div> 
// create buttons <span or div class="button"></> or <button/> with click
// 1-9, +,-,/,x,C,CA,<-
/* 4 by 4 grid - maybe it could also take keyboard input?

        /,x,-,+
        1,2,3,CA
        4,5,6,C
        7,8,9,D
*/
/*
mini texas instrument
screen to allow view of prior command moving upward

    shell will need fixed dimensions and radius corners
    16 buttons, each size has to fit within the shell in a 
        4 by 4 pattern with a 
        header for the output
        this could be done with a div or button/text box.
    
*/
document.addEventListener('click',(event) => {
    if ( !event.target.classList.contains('button') )
        return;
    }, false);
    
/*  EXAMPLE:
const btn = document.querySelector('button'); // 'button' = <button/>
btn.addEventListener('click', (event) => {
    const li = document.createElement('li');
    li.textContent = input.value
    document.querySelector('ul').appendChild(li)
    input.value = 'your email here' // to clear window
}) 
*/


