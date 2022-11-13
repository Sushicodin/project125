differenc=0;
x_leftWrist=0;
x_rightWrist=0;

function preload(){

}

function setup(){
canvas=createCanvas(550,550);
canvas.position(560,160);
webcam=createCapture(VIDEO);
webcam.size(450,450);

poseNet=ml5.poseNet(webcam, modelLoaded);

poseNet.on("pose", gotPoses);
}

function draw(){
background("green");
textSize(10);
fill("lime");
text('Raya',50,400);
textSize(differenc);
}

function modelLoaded(){
console.log("The Model Has Loaded");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);

        x_leftWrist=results[0].pose.leftWrist.x;
        x_rightWrist=results[0].pose.rightWrist.x;

        differenc=floor(x_leftWrist-x_rightWrist);

    }

}