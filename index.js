var num,num01,mark;
num = 0;
num01 = 0;

//クリックで値を受け取る
document.dentaku.num0.onclick = function num0(){
  num01 = num01 + document.dentaku.num0.value;
  console.log(num01);
}
document.dentaku.num1.onclick = function num1(){
  num01 = num01 + document.dentaku.num1.value;
  console.log(num01);
}
document.dentaku.num2.onclick = function num2(){
  num01 = num01 + document.dentaku.num2.value;
  console.log(num01);
}
document.dentaku.num3.onclick = function num3(){
  num01 = num01 + document.dentaku.num3.value;
  console.log(num01);
}


function parseNum(){
  num01 = parseInt(num01);
  num = num01;
  num01 = 0;
}

//四則計算
//markが押されたらmarkを確認し、num01をnumへパースして代入
document.dentaku.mark1.onclick = function mark1(){
  parseNum();
  mark = "+";
  console.log(mark);
  console.log(num);
}
document.dentaku.mark2.onclick = function mark2(){
  parseNum();
  mark = "-";
  console.log(mark);
  console.log(num);
}
document.dentaku.mark3.onclick = function mark3(){
  parseNum();
  mark = "*";
  console.log(mark);
  console.log(num);
}
document.dentaku.mark4.onclick = function mark4(){
  parseNum();
  mark = "/";
  console.log(mark);
  console.log(num);
}

//markに応じた処理を行う
function calculation(){
  if (mark == "+") {
    num = num + num01;
  } else if (mark == "-") {
    num = num - num01;
  } else if (mark == "*") {
    num = num * num01;
  } else if (mark == "/") {
    num = num / num01;
  } else {
    print('you used undifined mark...');
  }
}

//合計を計算する
document.dentaku.sum.onclick = function sum(){
  if (num01 == 0) {
    num01 = num;
    calculation();
    num01 = 0;
    console.log(num);
  } else {
    num = parseInt(num);
    num01 = parseInt(num01);
    calculation();
    num01 = 0;
    console.log(num);
  }
}

//変数の初期化
document.dentaku.clear.onclick = function clear(){
  num = 0;
  num1 = 0;
}







