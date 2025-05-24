var startTime = new Date().getTime();
function getRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}
function move(){
    var left = Math.random() * 300;
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
move();
document.getElementById("box").onclick = function(){
    document.getElementById("box").style.display = "none";
    var end = new Date().getTime();
    var timeTaken =(end-startTime)/1000;
    alert(timeTaken);
    move();
}