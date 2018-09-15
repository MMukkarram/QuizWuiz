var questions = [                    //1
    {
      "question": "What does HTML stand for?",
        "option1": "Home Tool Markup Language",
        "option2": "Hyperlinks and Text Markup Language",
        "option3": "Hyper Tool Management Language",
        "option4": "Hyper Text Markup Language",
        "answer": "4"
    },
    {
        "question": "Who is making the Web standards?",
        "option1": "Google",
        "option2": " The World Wide Web Consortium",
        "option3": "Mircrosoft",
        "option4": "Chrome",
        "answer": "2"
    },
    {
        "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed",
        "option1": "src",
        "option2": "longdesc",
        "option3": "alt",
        "option4": "title",
        "answer": "3"
    },
    {

        "question": "In HTML, onblur and onfocus are:",
        "option1": "Event attributes",
        "option2": "HTML attributes",
        "option3": "CSS attributes",
        "option4": "Style attributes",
        "answer": "1"
    },
    {
        "question": " Graphics defined by SVG is in which format?",
        "option1": "HTML",
        "option2": "CSS",
        "option3": "XML",
        "option4": "Photoshop",
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
        if(score>59){
            document.getElementById("level").innerHTML="Congrats..!! You move to next level";
            document.getElementById("button").innerHTML="<button type='button' class='btn btn-outline-secondary btn-lg'>Next Level</button>";
        }
        else{
            document.getElementById("level").innerHTML="Failed...!!";
            document.getElementById("button").innerHTML="<button type='button' class='btn btn-outline-secondary btn-lg'>Try Again</button>";

        }
    }
}
    timer = setInterval(timer, 1000);