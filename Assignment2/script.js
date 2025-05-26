var startTime = new Date().getTime();    // It is used to get the reaction time
function getRandomColor(){                     // This Function is used to get the random color of the box
        var letters = '0123456789ABCDEF';
        var color = '#'; 
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}
function move(){        // This function is used to move the box in left and top direction and also change the height and width of the box and random number for height and width
    var left = Math.random() * 300; // the function get the random numbers
    var top = Math.random() * 300;
    var wh = ((Math.random() * 400) + 100);
    document.getElementById("box").style.left = left + "px";
    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.height = wh + "px";
    document.getElementById("box").style.width = wh + "px";
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.backgroundColor = getRandomColor();
    startTime = new Date().getTime();
    
}
move(); // calling of the function
document.getElementById("box").onclick = function(){
    document.getElementById("box").style.display = "none";
    var end = new Date().getTime();
    var timeTaken =(end-startTime)/1000; // convert the time from millisecond to second
    alert(timeTaken + " Second");
    move();
}