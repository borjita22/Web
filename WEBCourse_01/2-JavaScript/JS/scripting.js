let start = new Date().getTime();

let bestTime = 10;

var myShape = document.getElementById("shape");

myShape.onclick = function()
{
    elementDisappear(myShape);
}

function elementReappears()
{
    myShape.style.display = "block"
    start = new Date().getTime();
}



function randomizeShape()
{
    let dimension = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
    let top = Math.random() * 500;
    let left = Math.random() * 500;
    let borderRadius = Math.random();

    if(borderRadius > 0.5)
    {
        borderRadius = 50;
    }
    else
    {
        borderRadius = 0;
    }

    myShape.style.top = top + "px";
    myShape.style.left = left + "px";

    myShape.style.borderRadius = borderRadius + "%";
    myShape.style.width = dimension + "px";
    myShape.style.height = dimension + "px";
    myShape.style.backgroundColor = getRandomColor();
}


function elementDisappear()
{
    myShape.style.display = "none";

    let end = new Date().getTime();

    let result = (end - start) / 1000;

    var timeTaken = document.getElementById("time-taken");
    timeTaken.innerHTML = result + "s";

    if(result < bestTime)
    {
        bestTime = result;
        document.getElementById("best-time").innerHTML = " Your best time is: " + bestTime + "s";
    }

    var timeToAppear = Math.random() * 1000;
    setTimeout(elementReappears, timeToAppear);
    randomizeShape();
}

function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

            