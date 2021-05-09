function sound(){
    document.getElementById("aus").play()
}
function sound1(){
    document.getElementById("kick").play()
}
function sound2(){
    document.getElementById("snare").play()
}
function sound3(){
    document.getElementById("tom1").play()
}
function sound4(){
    document.getElementById("tom2").play()
}
function sound5(){
    document.getElementById("tom3").play()
}
function sound6(){
    document.getElementById("tom4").play()
}
document.addEventListener("keypress",function(event){
    make(event.key);
});

function make(k){
switch(k){
    case"w":
    var t=new Audio ("snare.mp3");
    t.play();

    break;
    case"a":
    var t=new Audio ("kick-bass.mp3");
    t.play();

    break;
    case"s":
    var t=new Audio ("tom-1.mp3");
    t.play();

    break;
    case"d":
    var t=new Audio ("tom-2.mp3");
    t.play();

    break;
    case"j":
    var t=new Audio ("tom-3.mp3");
    t.play();

    break;
    case"k":
    var t=new Audio ("tom-4.mp3");
    t.play();

    break;
    case"l":
    var t=new Audio ("crash.mp3");
    t.play();

    break;
}
}
