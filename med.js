let firstNum ;
let secondNum;
let realAnswer;
let flag = true;

// Here if your elements need to be display none in the beggining of the game so i will 
// directly set the css display property to none in the css file instead of here with javascript.

document.getElementById("tryagain").style.display = "none";
document.getElementById("next").style.display = "none";

const node = document.createTextNode(question())
document.getElementById("question").append(node)

function question(){

// to implement different operations you could had create here an array od operations like 
// operation = ['-', '*', '/', '+'], then select a random one for each question and use it to calculate
// the answer to so you can use same code but add more operators.

    firstNum = Math.floor(Math.random() * 90) + 10;
    secondNum = Math.floor(Math.random() * 90) + 10;

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
  var sec = 12;
  var timer = setInterval(function(){
      document.getElementById('timer').innerHTML='00:'+sec;
      sec--;
      if (sec < 0 || !flag ) {
          clearInterval(timer);
      }
  },
  1000);
}
