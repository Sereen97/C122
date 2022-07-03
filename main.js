x = 0;
y = 0;
draw_circle="";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onreesult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcipt;
    document.getElementById("status").innerHTML = "The speech has been recgnized as:" + content;
    if(content=="circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor( ath.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";

        x = Math.floor(Math.random() * 900);
        y = Math.floor( ath.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";

    }
}

function setup()
{
    canvas = createCanvas(900, 600)
}

function draw()
{
    if(draw_circle == "set")
    {
        radius(Math.random() * 100)
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }

    if(draw_rect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
}