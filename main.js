function preload(){
    
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
    
    tint_color="";
}
function draw(){
    image(video,238,150,220,200);
    
    fill(252, 194, 223);
    stroke(250, 112, 181);
    circle(50,50,80);
    
    circle(58,430,80);
    
    circle(598,50,80);
    
    circle(598,430,80);
    
    fill(209, 189, 255);
    stroke(209, 189, 255);
    rect(90,40,438,20);
    
    rect(90,420,438,20);
    
    rect(40,90,20,300);
    
    rect(538,90,28,350);
}
function take_snapshot(){
    save('rashee11butinapictureframe.png');
}
