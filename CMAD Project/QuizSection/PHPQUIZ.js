var questions = [                    //1
    {
            "question": "What is PHP",
            "option1": "Programming language",
            "option2": "Server Side Language",
            "option3": "Non of them",
            "option4": "Both of them",
            "answer": "1"
    },
    {

        "question": "How to create variable?",
        "option1": "variable name = 'Farooq'",
        "option2": "var name='Bashu'",
        "option3": "$Name :'SM Alaudin Yahya '",
        "option4": "$Name='Haad'",
        "answer": "4"
    },
    {

        "question": "What is the correct way to open the file 'time.txt' as readable?",
        "option1": "fopen('time.txt','r');",
        "option2": "fopen('time.txt','r+');",
        "option3": "open('time.txt','r');",
        "option4": "open('time.txt','r+');",
        "answer": "1"
    },
    {

        "question": "The PHP syntax is most similar to:",
        "option1": "C++ & Python",
        "option2": "Perl and C",
        "option3": "Java & JavaScript",
        "option4": "React and Angular",
        "answer": "2"
    },
    {

        "question": "How do you create a cookie in PHP?",
        "option1": "buildcookie()",
        "option2": "putcookie()",
        "option3": "setcookie()",
        "option4": "cookie()",
        "answer": "3"
    }

];

// function start(){
//     document.getElementById("quizcontainer").style.display = "block";
//     document.getElementById("start").style.display = "none";
// }




var question = document.getElementById('question');    //1
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');

question.innerHTML = questions[0].question;        //1
option1.innerHTML = questions[0].option1;
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;

var load = 0;
var done=0;
var correct = 0;
function next(){
  var val = document.querySelector("input[name='option']:checked");    //2

  if(val ===null){
      alert("Select anyOne")
    }
   else{
    if(questions[load].answer === val.value) {
        console.log("right");
        correct++;
       }
     else{
         console.log("wrong");
     }    
    

       if((questions.length-1) === load ){
        var score  = correct*20;
      document.getElementById("quizcontainer").style.display = "none"; 
      document.getElementById("resultcontainer").style.display = "block";
      document.getElementById("result").innerHTML = "Your Score is " +score +"%"; 
      if(score>59){
        document.getElementById("level").innerHTML="Congrats..!! You move to next level";
        document.getElementById("button").innerHTML="<button type='button' class='btn btn-outline-secondary btn-lg'>Goto Home</button>";
    }
    else{
        document.getElementById("level").innerHTML= "Failed...!!";
    }
          }
       else{
   load++                                                  
   question.innerHTML = questions[load].question;
   option1.innerHTML = questions[load].option1;
   option2.innerHTML = questions[load].option2;
   option3.innerHTML = questions[load].option3;
   option4.innerHTML = questions[load].option4;
       }
   } 
        
}
    
    //CSS QUIZ
    //if(score>)



    //TIMER
var min = 1;
var sec = 30;
var timer;
var css=0;
var js=0;
var php=0;

function timer() {
    sec--;
    if (sec === 0) {
        sec = 59;
        min--;
    }
    if(min<1){
        document.getElementById("hurry").innerHTML="Hurry Up..!!";
    }
    document.getElementById("timer").innerHTML ="Remaining time : " + min + ":" + sec ;
    if (sec <= 1 && min <= 0) {
        var score = correct * 20;
        document.getElementById("quizcontainer").style.display = "none";
        document.getElementById("resultcontainer").style.display = "block";
        document.getElementById("result").innerHTML = "Your score is " + score + " %";
    }
}
    timer = setInterval(timer, 1000);
if(score>59){
    document.getElementById("level").innerHTML="Congrats..!! You move to next level";
    document.getElementById("button").innerHTML="<button type='button' class='btn btn-outline-secondary btn-lg'>Start Quiz</button>";
}
else{
    document.getElementById("level").innerHTML="Failed...!!";
}