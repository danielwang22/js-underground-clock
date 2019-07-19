//DOM元素
var hourHand = document.querySelector('.hour-hand');
var minuteHand = document.querySelector('.minute-hand');
var secondHand = document.querySelector('.second-hand');
//原始秒數
var originSecond = 0;

//呼叫function
setSecond()
setInterval(function(){HandRotate();},1000);

//先設定一開始的秒數
function setSecond(){
  let DateTime = new Date();
  let second = DateTime.getSeconds();
  originSecond = second;
}
function HandRotate(){
  //抓取時間
  let DateTime = new Date();
  let hour = DateTime.getHours();
  let minutes = DateTime.getMinutes();
  let second = DateTime.getSeconds();
  let newSecond = originSecond ++;
  //console.log(second);
  //計算角度
  let oneDegree = 360 / 60 ; //分針與秒針一格6度
  let hourOneDegree = oneDegree * 5; //時針一格30度
  let hourHandDegree = ((hourOneDegree * hour) + 90) + ((minutes / 60) * 30); //分針在走，時針也要跟著走
  let minuteHandDegree = (oneDegree * minutes) + ((second / 60) * 6); //秒針在走，分針也要跟著走
  let secondHandDegree = oneDegree * newSecond; //抓取的秒數 X 一格6度 = 現在秒針的角度
  hourHand.style.transform = `rotate(${hourHandDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegree}deg)`;
  secondHand.style.transform = `rotate(${secondHandDegree}deg)`;
}