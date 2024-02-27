// project one code = Introduce Yourself
document.getElementById("introbutton").onclick = function(){
    let userName = document.getElementById("nameinput").value;
    let age = document.getElementById("ageinput").value;

    let nameLen = userName.length;

    document.getElementById("introdisplay1").innerHTML = "Welcome, " + userName + "! Wow, your name is " + nameLen + " characters long!";
    
    if(age >= 100){
        document.getElementById("introdisplay2").innerHTML = "I can also see you probably lied about your age";
    }

    else if(age >=65){
        document.getElementById("introdisplay2").innerHTML = "I can also see you're a senior citizen";
    }

    else if(age >=18){
        document.getElementById("introdisplay2").innerHTML = "I can also see you're an adult";
    }

    else if(age < 18 && age >= 1){
        document.getElementById("introdisplay2").innerHTML = "I can also see you're not an adult yet";
    }

    else if(age < 1){
        document.getElementById("introdisplay2").innerHTML = "I can also see you lied about your age";
    }
}

// project two code

document.getElementById("sidecbutton").onclick = function(){
    let a = Number(document.getElementById("sideainput").value);
    let b = Number(document.getElementById("sidebinput").value);

    let c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("sidecdisplay").innerHTML = "The Hypotenuse of the given triangle with sides " + a + " and " + b + " will be: " + c;
}

// project three code

let counter = 0;

document.getElementById("decreasecounter").onclick = function(){
    counter -= 1;
    document.getElementById("counterdisplay").innerHTML = counter;
}

document.getElementById("resetcounter").onclick = function(){
    counter = 0;
    document.getElementById("counterdisplay").innerHTML = counter;
}

document.getElementById("increasecounter").onclick = function(){
    counter += 1;
    document.getElementById("counterdisplay").innerHTML = counter;
}

// project four code = dice throw

document.getElementById("dicebutton").onclick = function(){
    let x = Math.round(Math.random() * 5) + 1;
    let y = Math.round(Math.random() * 5) + 1;
    let z = Math.round(Math.random() * 5) + 1;
    document.getElementById("dicedisplay1").innerHTML = x;
    document.getElementById("dicedisplay2").innerHTML = y;
    document.getElementById("dicedisplay3").innerHTML = z;
    document.getElementById("dicebutton").innerHTML = "Roll dice again";
}



//Project Five Code = Number Guessing Game
// Using ternary operator

    const guessNumb = Math.floor(Math.random() * 10);
    var guesses = 0;
    console.log(guessNumb);     

document.getElementById("guessnumberbutton").onclick = function(){
    

    let guess = document.getElementById("guessnumberinput").value;
    guesses += 1;

    guess > guessNumb ?
    document.getElementById("guessnumberdisplay").innerHTML = "Select a smaller Number" :
    // console.log("Select smaller number"):
    guess < guessNumb ?
    document.getElementById("guessnumberdisplay").innerHTML = "Select a higher Number" :
    // console.log("Select higher number") :
    guess == guessNumb ?
    document.getElementById("guessnumberdisplay").innerHTML = "You guessed correct! It took you " + guesses + " attempts. Refresh to play again." :
    // console.log("Correct. Attempts:" + guesses):
    console.log("something went wrong");
}

