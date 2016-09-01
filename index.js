//0を代入。
var num = 0;
var num01 = "";
var mark = "";

//変数に値が代入されているのかどうかのチェック
var isset = function(data){
    if(data === "" || data === null || data === undefined){
        return false;
    }else{
        return true;
    }
};

//inputのデフォルトバリューにnumを表示。
function pressNum(){
  if(isset(num)){
    document.getElementById("sum").defaultValue = num;
  } else {
    document.getElementById("sum").defaultValue = num01;
  }
}

//値を仮で保存しておく。
function replaceNum(){
  num01 = num;
  num = 0;
}

//変数を数値にパースする。
function parseNum(){
  parseInt(num);
  parseInt(num01);
}

//計算する。
function calculation(){
  if (mark == "+") {
    num = parseInt(num01) + parseInt(num);
    pressNum();
  } else if (mark == "-") {
    num = num01 - num;
    pressNum();
  } else if (mark == "*") {
    num = num01 * num;
    pressNum();
  } else if (mark == "/") {
    num = num01 / num;
    pressNum();
  } else {
    print('you used undifined mark...');
  }
}

//初期状態
pressNum();

//入力された数字を表記
//続けて入力された文字は後ろに追加
document.dentaku.num0.onclick = function num0(){
  if(num == 0){
    num = document.dentaku.num0.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num0.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num1.onclick = function num1(){
  if(num == 0){
    num = document.dentaku.num1.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num1.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num2.onclick = function num2(){
  if(num == 0){
    num = document.dentaku.num2.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num2.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num3.onclick = function num3(){
  if(num == 0){
    num = document.dentaku.num3.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num3.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num4.onclick = function num4(){
  if(num == 0){
    num = document.dentaku.num4.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num4.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num5.onclick = function num5(){
  if(num == 0){
    num = document.dentaku.num5.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num5.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num6.onclick = function num6(){
  if(num == 0){
    num = document.dentaku.num6.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num6.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num7.onclick = function num7(){
  if(num == 0){
    num = document.dentaku.num7.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num7.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num8.onclick = function num8(){
  if(num == 0){
    num = document.dentaku.num8.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num8.value;
    pressNum();
    console.log(num);
  }
}
document.dentaku.num9.onclick = function num9(){
  if(num == 0){
    num = document.dentaku.num9.value;
    pressNum();
    console.log(num);
  } else {
    num = num + document.dentaku.num9.value;
    pressNum();
    console.log(num);
  }
}

//演算子の選択
document.dentaku.mark1.onclick = function mark1(){
  replaceNum();
  mark = "+";
  console.log(mark);
}
document.dentaku.mark2.onclick = function mark2(){
  replaceNum();
  mark = "-";
  console.log(mark);
}
document.dentaku.mark3.onclick = function mark3(){
  replaceNum();
  mark = "*";
  console.log(mark);
}
document.dentaku.mark4.onclick = function mark4(){
  replaceNum();
  mark = "/";
  console.log(mark);
}

//数字以外が選択されたら結果を表示
document.dentaku.cal.onclick = function cal(){
  calculation();
}

//ACでオールクリア
document.dentaku.clear.onclick = function clear(){
  num = 0;
  num01 = "";
  mark = "";
  pressNum();
}


//+α
//%を選択した時の処理
document.dentaku.percent.onclick = function percent(){
  num = num * 0.01;
  pressNum();
}
//+/-を選択した時の処理
document.dentaku.sign.onclick = function sign(){
  num = num * (-1);
  pressNum();
}