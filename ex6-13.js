function ChangeImageAndBack(){imgback();
ThreeSecChange2();
}
function ThreeSecChange2(){
  setTimeout("imgchange3()",3000);
}
function imgchange3() {
  document.getElementById('img13').src = './image/jyousai.png';
}
function imgback() {
  document.getElementById('img13').src = './image/jo-.png';
}