var start = new Date().getTime();
        function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
        function move(){
            var left=Math.random() * 300;
            var top=Math.random() * 300;
            var wh=((Math.random() * 400) + 100);
            document.getElementById("shape").style.left = left + "px";
            document.getElementById("shape").style.top = top + "px";
            document.getElementById("shape").style.width = wh + "px";
            document.getElementById("shape").style.height = wh + "px";
            document.getElementById("shape").style.display = "block";
            document.getElementById("shape").style.backgroundColor = getRandomColor();
            start = new Date().getTime();

        }
        move();
        document.getElementById("shape").onclick = function(){
            document.getElementById("shape").style.display = "none";
            var end = new Date().getTime();
            var timeTaken = (end-start)/1000;
            alert(timeTaken);
            move();
        }