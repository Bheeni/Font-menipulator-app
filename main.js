function setup(){
    canvas = createCanvas(700, 600);
    canvas.position(500,600);
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.position(490, 590);

 poseNet = ml5.poseNet(video, modelLoaded);
    poseNet = poseNet.on('pose', gotPoses);
}

function modelLoaded (){
    console.log("poseNet model is initialized");
}

function gotPoses (results){
    if(results.length > 0)
    {
        console.log(results);
    }
}