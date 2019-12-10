function hyouji2(){var str2="一文字ずつ表示します。";
var cnt2=document.timer2.moji2.value.length;
if(cnt2<11)
{document.timer2.moji2.value=str2.substr(0,cnt2+1);}
else{document.timer2.moji2.value=""; }
setTimeout("hyouji2()",1000);}
