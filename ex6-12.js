function ChangeImageBack(){ imgback();
ThreeChange();
}
function ThreeChange(){
  setTimeout("imgchange3()",3000);
}
function imgchange3() {
  document.getElementById('logo2').src = './image/josai.png';
}
function imgback() {
  document.getElementById('logo2').src = './image/jo-.png';
}