var questions = [                    //1
    {
            "question": "What does CSS stand for?",
            "option1": "Computer Style Sheet",
            "option2": "Cascade Style Sheet",
            "option3": "Colorful Style Sheet",
            "option4": "Creative Style Sheet",
            "answer": "2"
    },
    {

        "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
        "option1": "In Body Section",
        "option2": "In Head Section",
        "option3": "In Title Section",
        "option4": "In Javascript File",
        "answer": "2"
    },
    {

        "question": "Which HTML attribute is used to define inline styles?",
        "option1": "style",
        "option2": "class",
        "option3": "styles",
        "option4": "font",
        "answer": "1"
    },
    {

        "question": "How do you insert a comment in a CSS file?",
        "option1": "'This is a comment",
        "option2": "//This is a comment",
        "option3": "/*This is a comment*/",
        "option4": "*/This is a comment*/",
        "answer": "3"
    },
    {

        "question": "Which property is used to change the background color?",
        "option1": "bg-color",
        "option2": "color",
        "option3": "backgroundColor",
        "option4": "background-color",
        "answer": "4"
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
        document.getElementById("button").innerHTML="<button type='button' class='btn btn-outline-secondary btn-lg'>Start Quiz</button>";
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