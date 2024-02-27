// Build a rectangle

document.getElementById("square-button").onclick = function(){
    
    document.getElementById("display-area-square").innerHTML = "";
    const squareSize = document.getElementById("square-size").value;

    if(squareSize <= 50){

    for(let i = 0; i < squareSize; i+=1){

        for(let j = 0; j < squareSize; j+=1){
            document.getElementById("display-area-square").innerHTML += "#";
        }
        document.getElementById("display-area-square").innerHTML += "<br>";
    }

    }
    else{
        document.getElementById("display-area-square").innerHTML += "Please enter a size between 1 and 50";
    }
    
}

// Build Decending Stairs

document.getElementById("descending-stairs-button").onclick = function(){
    document.getElementById("display-area-descending-stairs").innerHTML = "";
    const decendingStairsRow = document.getElementById("descending-stairs").value;

    if (decendingStairsRow <= 50){

        for(let i = 0; i < decendingStairsRow; i+=1){
            for(let j = -1; j < i; j+=1){
                document.getElementById("display-area-descending-stairs").innerHTML += "#";
            }
            document.getElementById("display-area-descending-stairs").innerHTML += "<br>";
        }
    }
    else{
        document.getElementById("display-area-descending-stairs").innerHTML += "Please enter a size between 1 and 50";
    }
}

// Build Ascending Stairs

document.getElementById("ascending-stairs-button").onclick = function(){
    document.getElementById("display-area-ascending-stairs").innerHTML = "";
    const ascendingStairsRow = document.getElementById("ascending-stairs").value;

    if(ascendingStairsRow <= 50){
        for(let i = 0; i < ascendingStairsRow; i+=1){
            for(let j = -1; j < ascendingStairsRow - i + 1; j+=1){
                document.getElementById("display-area-ascending-stairs").innerHTML += "&nbsp&nbsp";
            }
            for(let k = -1; k < i;k+=1)
            {
                document.getElementById("display-area-ascending-stairs").innerHTML += "#";
            }
            document.getElementById("display-area-ascending-stairs").innerHTML += "<br>";   
        }
    }
    else{
        document.getElementById("display-area-ascending-stairs").innerHTML += "Please enter a size between 1 and 50";
    }
}

// Build Combined Stairs

document.getElementById("combined-stairs-button").onclick = function(){
    document.getElementById("display-area-combined-stairs").innerHTML = "";
    const combinedStairsRow = document.getElementById("combined-stairs").value;

    if (combinedStairsRow <= 50){
        for(let i = 0; i < combinedStairsRow; i +=1){
            for(let j = 0; j < combinedStairsRow - i; j+=1){
                document.getElementById("display-area-combined-stairs").innerHTML += "&nbsp&nbsp";
            }
    
            for (let k = -1; k < i; k+=1){
                document.getElementById("display-area-combined-stairs").innerHTML += "#";
            }
    
            document.getElementById("display-area-combined-stairs").innerHTML += "&nbsp&nbsp";
    
            for(let j = -1; j < i; j+=1)
            {
                document.getElementById("display-area-combined-stairs").innerHTML += "#";
            }
            document.getElementById("display-area-combined-stairs").innerHTML += "<br>";
        }
    }
    else{
        document.getElementById("display-area-combined-stairs").innerHTML += "Please enter a size between 1 and 50";
    }

    
}