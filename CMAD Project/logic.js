function check(){
    var loglenght = localStorage.length - 1;
        var records = 0;
        for(var i=0 ; i <= loglenght; i++){
            var itemkey = localStorage.key(i);
            var value = localStorage.getItem(itemkey);
            var valueobj = JSON.parse(value);
            if( valueobj.email == document.getElementById("email").value ){
               alert("<b>This email has already been registered</b>"); 
               records = 1;
               return false;
               break;
            }
        }

        if(records==0){
            saveData();
        }
  }

  function saveData(){

  var formdata = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      contact: document.getElementById("contact").value,
    }
  
   var data = JSON.stringify(formdata);
   var id = JSON.stringify(document.getElementById("email").value);
   localStorage.setItem(id, data);
}

function signIn(){
    var loglenght = localStorage.length - 1;
        var records = 0;
        for(var i=0 ; i <= loglenght; i++)
        {
            var itemkey = localStorage.key(i);
            var value = localStorage.getItem(itemkey);
            var valueobj = JSON.parse(value);
            if((valueobj.email == document.getElementById("em").value) && (valueobj.password == document.getElementById("pass").value)) {
               records==1;
               document.getElementById("button").innerHTML="<a href='QuizSection/TitleHTML.html'><button type='button' class='btn btn-outline-secondary btn-lg'>Start Quiz</button></a>";
             // window.location.href = "HTMLQUIZ.html";
              return false;
        
            }
        }

        if(records==0){
            alert("Wrong Email or Password Try Again.....");
            return false;
        }
  }