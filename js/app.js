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


const getHistory = () => {
    // return document.getElementById("history-value").innerText;
}
console.log(getHistory());
    
const printHistory = (num) => {
    return document.getElementById("history-value").innerText = num;
}

const getOutput = () => {
    if (num = "") {
        document.getElementById("output-value").innerText = num;
    }
    return document.getElementById("output-value").innterText = getFormattedNumber(num);
}

const getFormattedNumber = (num) => {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

const reverseNumberFormat = (num) => {
    return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
        if (this.id == "clear") {
            printHistory('');
            printOutput('');
        }
        else if (this.id == "backspace") {
            let output = reverseNumberFormat(getOutput()).toString();
            if (output){
                output = output.substr(0, output.length - 1); // backspace
                printOutput(output); 
            }
        } else {
            let output = getOutput();
            let history = getHistory();
            if (output != '') {
                output = reverseNumberFormat(output);
                history = histsory + output;
                if(this.id == '=') {
                    let result = eval(history);
                    printOutput(result);
                    printHistory('');
                }
            }
        }
    });
}


const number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
        let output=reverseNumberFormat(getOutput());
        if (output != Nan) {
            output = output+this.id;
            printOutput(output);
        }
    });
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

        C, CA,/
        1,2,3,X
        4,5,6,-
        7,8,9,+
        0,., =
*/
/*
mini texas instrument
screen to allow view of prior command moving upward
    

document.addEventListener('click',(event) => {
    let li = document.createElement('li');
    if ( !event.target.classList.contains('button') ){
        return;
    } else if (event.target.classList.contains('1')){ 
        li.textContent = "1";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 1")
        // li = ""
    } else if (event.target.classList.contains('2')){ 
        li.textContent = "2";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 2")
    } else if (event.target.classList.contains('3')){ 
        li.textContent = "3";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 3")
    } else if (event.target.classList.contains('4')){ 
        li.textContent = "4";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 4")
    } else if (event.target.classList.contains('5')){ 
        li.textContent = "5";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 5")
    } else if (event.target.classList.contains('6')){ 
        li.textContent = "6";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 6")
    } else if (event.target.classList.contains('7')){ 
        li.textContent = "7";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 7")
    } else if (event.target.classList.contains('8')){ 
        li.textContent = "8";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 8")
    } else if (event.target.classList.contains('9')){ 
        li.textContent = "9";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 9")
    } else if (event.target.classList.contains('o')){ 
        li.textContent = "0";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click 0")
    } else if (event.target.classList.contains('add')){ 
        li.textContent = "+";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click add")
    } else if (event.target.classList.contains('subtract')){ 
        li.textContent = "-";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click subtract")
    } else if (event.target.classList.contains('multiply')){ 
        li.textContent = "x";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click multiply")
    } else if (event.target.classList.contains('divide')){ 
        li.textContent = "/";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click divide")
    } else if (event.target.classList.contains('add')){ 
        li.textContent = "+";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click add")
    } else if (event.target.classList.contains('clear')){ 
        li.textContent = "clear attempt";  // turn this into button click value???
        document.querySelector('#display').appendChild(li);
        console.log("click clear")
    // } else {
    //     li.textContent = "hello"  // turn this into button click value???
    //     document.querySelector('#display').appendChild(li)
    //     console.log("clicke hello")
            }
    }, false);

    document.addEventListener('click',(event) => {
        if ( event.target.querySelector('#1') ){
            const li = document.createElement('li');
            li.textContent = "1"  // turn this into button click value???
            document.querySelector('#display').appendChild(li)
                }
        }, false);
*/
/* EXAMPLE
<form enctype="multipart/form-data" action="" method="post">
    <p>Upload file(s)</p>
    <div id="files">
        <p><input type="file" name="uploaded_file[]" /></p>
    </div>
    <p><input type="button" value="Add File" onclick="addFile();" /></p>
</form>
*/


