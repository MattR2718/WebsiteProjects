var rotateBool = true;
var xRot = false;
var yRot = true;
var zRot = false;
var y = 0;
var x = 0;
var z = 0;
var speed = 0.5;
var state = 0;
var animate = true;
var r = [100, 0, 0];
var g = [0, 100, 0];
var a = [100, 100, 0];
/*
0-Green
1-Amber
2-Red
3-Red+Amber
*/
var count = 0;
function setup() {
  var cnv = createCanvas(500, 1000, WEBGL)
  cnv.parent("canvas")
  cnv.position(50, 125)
}

function draw() {
    count = (count + 1) % 50;
    if (count == 0){
        if (animate){
            state = (state + 1) % 4;
        }
        console.log(state);
    }
    
    r = [100, 0, 0];
    g = [0, 100, 0];
    a = [100, 100, 0];
    
    switch (state){
        case 0:
            g = [0, 255, 0];
            break;
        case 1:
            a = [255, 255, 0];
            break;
        case 2:
            r = [255, 0, 0];
            break;
        case 3:
            r = [255, 0, 0];
            a = [255, 255, 0];
            break;
        default:
            r = [0, 0, 255];
            a = [0, 0, 255];
            g = [0, 0, 255];
    }
    
    document.getElementById("red").style.outlineColor = rgbM(r[0], r[1], r[2]);
    document.getElementById("amber").style.outlineColor = rgbM(a[0], a[1], a[2]);
    document.getElementById("green").style.outlineColor = rgbM(g[0], g[1], g[2]);
    document.getElementById("redandamber").style.outlineColor = rgbM((a[0] + r[0])/2, (a[1] + r[1])/2, (a[2] + r[2])/2);
    clear()
    //background(245, 245, 245)
    stroke(4);
    if(rotateBool){
        if (yRot){
            y += parseFloat(document.getElementById("rotateSpeed").value);
        }
        if (xRot){
            x += parseFloat(document.getElementById("rotateSpeed").value);
        }
        if (zRot){
            z += parseFloat(document.getElementById("rotateSpeed").value);
        }
    }
    rotateY(y);
    rotateX(x);
    rotateZ(z);
    //Main Box
    translate(0, -150,0)
    fill(47, 54, 48)
    box(150, 400, 150)
    //Pole
    translate(0, 150 + 250,0)
    fill(102, 107, 103)
    box(30, 500, 30)
    noStroke();
    //Red Light
    translate(0, -250-275, 50)
    fill(r[0], r[1], r[2])
    sphere(50)
    //Amber Lighe
    translate(0, 115, 0)
    fill(a[0], a[1], a[2])
    sphere(50)
    //Green Light
    translate(0, 115, 0)
    fill(g[0], g[1], g[2])
    sphere(50)
}

function rgbM(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

function toggleRotate() {
    if (rotateBool){
        if (xRot){
            xRot = !xRot;
        }
        if (yRot){
            yRot = !yRot;
        }
        if(zRot){
            zRot = !zRot;
        }
    } else{
        xCheck();
        yCheck();
        zCheck();
    }
    rotateBool = !rotateBool;
}

function toggleAnimation() {
    animate = !animate;
}

function stepAnimation(){
    state = (state + 1) % 4;
}

function resetRotate(){
    y = 0;
    x = 0;
    z = 0;
}

function xCheck(){
    var checkBox = document.getElementById("xC");
    if (checkBox.checked == true){
        xRot = true;
    }
    else{
        xRot = false;
    }
}

function yCheck(){
    var checkBox = document.getElementById("yC");
    if (checkBox.checked == true){
        yRot = true;
    }
    else{
        yRot = false;
    }
}

function zCheck(){
    var checkBox = document.getElementById("zC");
    if (checkBox.checked == true){
        zRot = true;
    }
    else{
        zRot = false;
    }
}