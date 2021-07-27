var element = document.getElementsByClassName("button");


element[0].addEventListener("mouseover", function (){
    mOver();//blue
});
element[0].addEventListener("mousedown", function (){
    mDown(); // red
});
element[0].addEventListener("mouseup", function (){
    mUp(); // yellow
});
element[0].addEventListener("dblclick", function (){
    mDblClick(); // green
});
window.addEventListener('scroll', function (){
    mScroll();//orange
});

window.addEventListener('keydown', function(event) {
 changeColor(event.keyCode);
});

function mOver(){
    element[0].style.backgroundColor = "blue";
}
function mDown(){
    element[0].style.backgroundColor = "red";
}
function mUp(){
    element[0].style.backgroundColor = "yellow";
}
function mDblClick(){
    element[0].style.backgroundColor = "green";
}
function mScroll(){
    element[0].style.backgroundColor = "orange";
}
function changeColor(keycode){
    console.log(keycode);
switch(keycode){
    case 82: element[0].style.backgroundColor = "red"; break;
    case 71: element[0].style.backgroundColor = "green"; break;
    case 79: element[0].style.backgroundColor = "orange"; break;
    case 89: element[0].style.backgroundColor = "yellow"; break;
    case 66: element[0].style.backgroundColor = "blue"; break;
    case 80: element[0].style.backgroundColor = "purple"; break;
}
}