song1 ="";
song2 ="";
leftWristX = 0; 
leftWristY = 0;
rightWristY = 0;
rightWristX = 0;
scoreLeftWrist = 0;
scoreRightWrist =0;
song1status = "";
song2status ="";
function preload()
{
 song1=loadSound("music.mp3");
 song2 =loadSound("music2.mp3");   
}

function setup()
{
 canvas = createCanvas(600,500);
 canvas.center();
 
 video =createCapture(VIDEO);
 video.hide();

 poseNet =ml5.poseNet(video,modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log("PoseNet is Initialized");
}

function draw()
{
  image(video, 0,0,600,500);
  fill("#63202c");
  stroke("#63202c");
  song1status = song1.isPlaying();
  if(scoreLeftWrist > 0.2)
  {

    circle(leftWristX,leftWristY,20);
    song2.stop();
  

 
  
  if(song1status == false)
  {
  song1.play();
document.getElementById("song").innerHTML = "playing - The Harry Potter Theme Song";
  }

  }

else(song2status == true)
{
 song2.play();
document.getElementById("song").innerHTML = "playing  - The Song 2"
 
}
}

function gotPoses(results)
{
if (results.length > 0)
{
 console.log(results);
 scoreLeftWrist = results[0].pose.keypoints[9].score;
 console.log("scoreLeftWrist = "  + scoreLeftWrist);
 leftWristX = results[0].pose.leftWrist.x;
 leftWristY = results[0].pose.leftWrist.y;
 console.log(" leftWristX = " +leftWristX+ " leftWristY = " +leftWristY);

 rightWristX = results[0].pose.rightWrist.x;
 rightWristY = results[0].pose.rightWrist.y;
 console.log(" rightWristX = " +rightWristX+ " rightWristY = " +rightWristY);
}
}