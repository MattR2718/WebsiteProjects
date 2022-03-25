function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ];
}

function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

var h = 0;
setInterval(function() { // this code is executed every 500 milliseconds:
    h = (h + 0.01) / 1;
    var rgbB = HSVtoRGB(h, 1, 1);
    document.body.style.backgroundColor = RGBToHex(rgbB[0], rgbB[1], rgbB[2]);
    var rgbT = HSVtoRGB((h+0.5), 1, 1)
    
    var info = document.getElementsByClassName("info");
    for (let i = 0; i < info.length; i++) {
        info[i].style.color = RGBToHex(rgbT[0], rgbT[1], rgbT[2]);
    }

}, 50);

function submit(){
    var data = [[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [01, 12, 23, 34, 45, 56, 67, 78, 89, 90, 99]]
    var value = document.getElementById("box").value;
    var speed = parseInt(value)
    speed = Math.round(speed/10) * 10;
    if(speed < 0) { speed = 0; }
    if(speed > 100) { speed = 100;}
    var i = data[0].indexOf(speed)
    //alert(i)
    alert("Speed: " + speed + "mph    Stopping Distance: " + data[1][i] + "m")
}