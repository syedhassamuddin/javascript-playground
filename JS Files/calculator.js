// Simple Calculator Code

document.getElementById("simple-calculator-button").onclick = function(){
    let firstNumb = Number(document.getElementById("simple-num1").value);
    let secondNumb = Number(document.getElementById("simple-num2").value);

    let simpleOperationCalculatorAdd = document.getElementById("simple-operation-add").checked;
    let simpleOperationCalculatorSub = document.getElementById("simple-operation-sub").checked;
    let simpleOperationCalculatorMul = document.getElementById("simple-operation-mul").checked;
    let simpleOperationCalculatorDiv = document.getElementById("simple-operation-div").checked;

    if (simpleOperationCalculatorAdd){
        document.getElementById("simple-calculator-display").innerHTML = firstNumb + secondNumb;
    }
    else{
    }

    if(simpleOperationCalculatorSub){
        if(firstNumb >= secondNumb){
            document.getElementById("simple-calculator-display").innerHTML = firstNumb - secondNumb;
        }
        else{
            document.getElementById("simple-calculator-display").innerHTML = secondNumb - firstNumb;
        }
    }
    else{
    }
    
    if(simpleOperationCalculatorMul){
        document.getElementById("simple-calculator-display").innerHTML = firstNumb * secondNumb;
    }
    else{
    }

    if(simpleOperationCalculatorDiv){
        if(firstNumb >= secondNumb){
            document.getElementById("simple-calculator-display").innerHTML = firstNumb / secondNumb;
        }
        else{
            document.getElementById("simple-calculator-display").innerHTML = secondNumb / firstNumb;
        }
    }
    else{
    }
}

// Advanced Calculator Code

var result = 0;

for(i=0;i<9;i+=1){
    document.getElementById(`advcal${i}`).onclick = function(){
        document.getElementById("advance-calculator-display").innerHTML += i;
    }
}

// document.getElementById("advcal0").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 0;
// }

// document.getElementById("advcal1").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 1;
// }

// document.getElementById("advcal2").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 2;
// }

// document.getElementById("advcal3").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 3;
// }

// document.getElementById("advcal4").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 4;
// }

// document.getElementById("advcal5").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 5;
// }
// document.getElementById("advcal6").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 6;
// }
// document.getElementById("advcal7").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 7;
// }
// document.getElementById("advcal8").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 8;
// }
// document.getElementById("advcal9").onclick = function(){
//     document.getElementById("advance-calculator-display").innerHTML += 9;
// }

document.getElementById("advcaladd").onclick = function(){
    document.getElementById("advance-calculator-display").innerHTML += "+";
}
document.getElementById("advcalsub").onclick = function(){
    document.getElementById("advance-calculator-display").innerHTML += "-";
}
document.getElementById("advcalmul").onclick = function(){
    document.getElementById("advance-calculator-display").innerHTML += "x";
}
document.getElementById("advcaldiv").onclick = function(){
    document.getElementById("advance-calculator-display").innerHTML += "/";
}

document.getElementById("advcalequals").onclick = function(){
    document.getElementById("advance-calculator-display").innerHTML += "=";
}

document.getElementById("advcalback").onclick = function(){
    let advCalcDisplay = document.getElementById("advance-calculator-display");
    advCalcDisplay.innerHTML = advCalcDisplay.innerHTML.slice(0,-1);
}