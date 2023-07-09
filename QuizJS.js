const quizData = [{
    question:"1.  Why so JavaScript and Java have similar name?",
    opt1:"JavaScript is a stripped-down version of Java",
    opt2:"JavaScript's syntax is loosely based on Java's",
    opt3:" They both originated on the island of Java",
    opt4:" None of the above",
    correct:"JavaScript's syntax is loosely based on Java's"
},
{
    question:"2.  When a user views a page containing a JavaScript program, which machine actually executes the script?",
    opt1:"The User's machine running a Web browser",
    opt2:"The Web server",
    opt3:"A central machine deep within Netscape's corporate offices",
    opt4:"None of the above",
    correct:"The User's machine running a Web browser"
},
{
    question:"3.  ______ JavaScript is also called client-side JavaScript.",
    opt1:"Microsoft",
    opt2:"Navigator",
    opt3:"LiveWire",
    opt4:"Native",
    correct:"Navigator"
},
{
    question:"4.  __________ JavaScript is also called server-side JavaScript.",
    opt1:"Microsoft",
    opt2:"Navigator",
    opt3:"LiveWire",
    opt4:"Native",
    correct:"LiveWire"
},
{
    question:"5.  What are variables used for in JavaScript Programs?",
    opt1:"Storing numbers, dates, or other values",
    opt2:"Varying randomly",
    opt3:"Causing high-school algebra flashbacks",
    opt4:"None of the above",
    correct:"Storing numbers, dates, or other values"
},
{
    question:"6.  _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    opt1:"Client-side",
    opt2:"Server-side",
    opt3:"Local",
    opt4:"Native",
    correct:"Client-side"
},
{
    question:"7.  Which of the following can't be done with client-side JavaScript?",
    opt1:"Validating a form",
    opt2:"Sending a form's contents by email",
    opt3:"Storing the form's contents to a database file on the server",
    opt4:"None of the above",
    correct:"Storing the form's contents to a database file on the server"
},
{
    question:"8.  Which of the following are capabilities of functions in JavaScript?",
    opt1:"Return a value",
    opt2:"Accept parameters and Return a value",
    opt3:"Accept parameters",
    opt4:"None of the above",
    correct:"Accept parameters"
},
{
    question:"9.  Which of the following is not a valid JavaScript variable name?",
    opt1:"2names",
    opt2:" _first_and_last_names",
    opt3:"FirstAndLast",
    opt4:"None of the above",
    correct:"2names"
},
{
    question:"10.  ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    opt1:"<SCRIPT>",
    opt2:"<BODY>",
    opt3:"<HEAD>",
    opt4:"<TITLE>",
    correct:"<SCRIPT>"
}];


var questionCounter=0;
var score=0;
var qstn=document.getElementById("question");
function showQuestions(){
    var opt1_text=document.getElementById("opt1_label");
    var opt2_text=document.getElementById("opt2_label");
    var opt3_text=document.getElementById("opt3_label");
    var opt4_text=document.getElementById("opt4_label");

    qstn.innerHTML=quizData[questionCounter].question;
    opt1_text.innerText=quizData[questionCounter].opt1;
    opt2_text.innerText=quizData[questionCounter].opt2;
    opt3_text.innerText=quizData[questionCounter].opt3;
    opt4_text.innerText=quizData[questionCounter].opt4;

    document.getElementById('opt-1').setAttribute("value",opt1_text.innerText);
    document.getElementById('opt-2').setAttribute("value",opt2_text.innerText);
    document.getElementById('opt-3').setAttribute("value",opt3_text.innerText);
    document.getElementById('opt-4').setAttribute("value",opt4_text.innerText);
}
showQuestions();

function save(){
    var options= document.getElementsByName('option');
    for (let i=0;i<4;i++){
        if(options[i].checked){
            var answer= options[i].value;
            options[i].checked=false;
            break;
        }
    }
    if(answer==quizData[questionCounter].correct){
        score+=10;
        document.getElementById('score').innerHTML="Score:"+score;
    }
    if(questionCounter<9){
        questionCounter++;
        showQuestions();
    }
    else{
        document.getElementById('mainContainer').style.display="none";
        var id= setInterval(move,9);
        var tPos=0;
        var lPos=0;
        var fSize=0;
        function move(){
            var finalScore=document.getElementById('showScore');
            if(tPos==244 && lPos==-762.5){
                clearInterval(id);
            }
            else{
                tPos+=4;
                lPos-=12.5;
                fSize+=1.5;
                finalScore.style.top=tPos+"px";
                finalScore.style.left=lPos+"px";
                document.getElementById('score').innerHTML="Final Score:"+score;
                document.getElementById('score').style.fontSize=fSize+"px";
            }
        }
    }
}