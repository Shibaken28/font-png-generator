
let index=0;
let input = "abgあ|;曜";//defghijklmnopqrstuvwxyzあかさたな憂鬱";
let downloading = false;
let size=64;
let fixed=true;
let font="Nikukyu";
let col="#000000";
let scale=0.7;
let fileName="img_";

function setup() {
    frameRate(10);
}

function draw(){
    getVars();
    if(downloading)download();
    createCanvas(windowWidth*0.8,windowHeight*0.5);
    let x=0,y=10;
    for(let i=0;i<input.length;i++){
        x+=10;
        textSize(size*scale);
        let c = input[i];
        let s = size;
        if(!fixed){
            s = textWidth(c);
        }
        textAlign(CENTER, CENTER);
        textFont(font);
        fill(200);
        stroke(0);
        rect(x,y,s,size);
        noStroke();
        fill(col);
        text(c,x+s/2,y+size/2);
        x+=s;
        if(x+size>=width){
            y+=size+10;
            x=0;
        }
    }
}

function getVars(){
    input = document.getElementById("input").value;
    font = document.getElementById("font").value;
    fixed = document.getElementById("fixed").checked;
    col = document.getElementById("color").value;
    scale = Number(document.getElementById("scale").value);
    size = Number(document.getElementById("size").value);
    fileName = document.getElementById("fileName").value;
}

function beginDownload(){
    downloading = true;
    index = 0;
}

function endDownload(){
    downloading = false;
}

function download(){
    if(index<0||index>=input.length){
        endDownload();
    }
    textSize(size*scale);
    const output = Array.from(new Set(input));
    let s = size;
    if(!fixed){
        s = textWidth(output[i]);
    }
    createCanvas(s, size);
    clear();
    background(0,0,0,0);
    textAlign(CENTER, CENTER);
    textFont(font);
    fill(col);
    text(output[index],width/2,height/2);
    save(fileName+output[index]+".png");
    print(output[index])
    index+=1;
    if(index==output.length){
        endDownload();
    }
}

function generate(){
    let com = window.confirm("複数のファイルがダウンロードされます．よろしいですか？");
    if(com)beginDownload();
}
