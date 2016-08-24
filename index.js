var num1,num2,sum1;

function input(){
  num1 = document.dentaku.num1.value;
  num2 = document.dentaku.num2.value;
}

//足し算
document.dentaku.sum1.onclick = function sum(){
  input();
  sum1 = parseInt(num1) + parseInt(num2);
  console.log(sum1);
}

//引き算
document.dentaku.sum2.onclick = function sum(){
  input();
  if (num1 > num2) {
    sum1 = parseInt(num1) - parseInt(num2);
    console.log(sum1);
  } else {
    sum1 = 'エラーだ！！！';
    console.log(sum1);
  }
}

//掛け算
document.dentaku.sum3.onclick = function sum(){
  input();
  sum1 = parseInt(num1) * parseInt(num2);
  console.log(sum1);
}

//割り算
document.dentaku.sum4.onclick = function sum(){
  input();
  if (num1 > 0) {
    sum1 = parseInt(num1) / parseInt(num2);
    console.log(sum1);
  } else if (num1 == 0 || num2 == 0) {
    sum1 = 'エラーだ！！！';
    console.log(sum1);
  }
}






