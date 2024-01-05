img = "";
Status = "";
objects = [];

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

    function preload(){
     img = loadImage("dog_cat.jpg");
    }

    function draw(){
        image(img,0,0,600,500);

        if (Status !=  "")
        {
            for (i = 0; i < objects.length; i++){
                document.getElementById("status").innerHTML = "Status : Object Detected";

                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + "" + percent + "%" , objects[i].x, objects[i].y);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
    }

    function modelLoaded(){
        console.log("Model Loaded");
        Status = true;
        objectDetector.detect(img, gotResults);
    } 

    function gotResults(error, results){
         if (error){
             console.log(error);
        }
        console.log(results);
         objects = results;
         }

