let firstNum ;
let secondNum;
let realAnswer;
let flag = true;

document.getElementById("tryagain").style.display = "none";
document.getElementById("next").style.display = "none";

const node = document.createTextNode(question())
document.getElementById("question").append(node)

function question(){
// for the hard level then if the operator was * or / so then you can have different options for firstNum
// and secndNumb for example for * i will use two digist and not 3, and for / i will use only 2 for the second number.

    firstNum = Math.floor(Math.random() * 900) + 100;
    secondNum = Math.floor(Math.random() * 900) + 100;

    realAnswer = firstNum + secondNum 
    console.log(realAnswer);

    return firstNum + " + " + secondNum ;
}

document.getElementById("button").onclick = function() {

    let playersAnswer = document.getElementById("answer").value;
    if (playersAnswer == realAnswer) {
flag = false
        const node1 = document.createTextNode(`you are correct the answer is ${realAnswer}`)
        document.getElementById("result").append(node1)
        document.getElementById("next").style.display = "block";
        console.log("correct"); 
        
    }else{
      flag = false
        const node2 = document.createTextNode(`you are wrong the answer is ${realAnswer}`)
        document.getElementById("badresult").append(node2)
        document.getElementById("tryagain").style.display = "block";
        console.log("wrong");
     
    }
}

timer()

function timer(){
  var sec = 20;
  var timer = setInterval(function(){
      document.getElementById('timer').innerHTML='00:'+sec;
      sec--;
      if (sec < 0 || !flag ) {
          clearInterval(timer);
      }
  },
  1000);
}
