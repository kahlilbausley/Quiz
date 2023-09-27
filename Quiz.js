var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];
  var currentQuestion=0;
  var userscore=0;
  var currentTime=75;
  var timeThread;
  var scores=[]
function nextquestions()
{

}



window.addEventListener('load', function(event) {
    let initials = prompt("enter your initials")
    let startbutton=document.querySelector("#startbutton");
    let timeElement=document.querySelector("#time");
    let questiontitle=document.querySelector("#question");
    let answers=document.querySelector("#answers");
    let completed=document.querySelector("#completed");
    let scoreelement=document.querySelector("#score");
    let questionWrapper=document.querySelector("#questionWrapper");
    let viewhighscores=document.querySelector("#viewhighscores");
    let highscores=document.querySelector("#highscores");
    let scorelist=document.querySelector("#highscores ol");

    startbutton.addEventListener("click",function(){
        document.querySelector("#startsection").style="display:none"
        document.querySelector("#questionWrapper").style="display:block"
        function countdown()
    {
        currentTime=currentTime-1;
        timeElement.innerHTML=currentTime;
        if(currentTime==0){
            completed.style.display="block";
            clearInterval(countdown);
            questionWrapper.style.display="none";
    

        }
        if(currentQuestion==questions.length){
            clearInterval(countdown)

}
    }
    setInterval(countdown,1000);
    });

    function answerquestion(event){ 
        let correctanswer=questions[currentQuestion].answer;
        let answernode=event.currentTarget;
        let selectananswer=answernode.innerHTML
        if(correctanswer==selectananswer){
            userscore=userscore+1;
            scoreelement.innerHTML=initials+": "+userscore;


        } else{
            
            currentTime-=10
        }
        currentQuestion=currentQuestion+1;
        if(currentQuestion==questions.length){
                    completed.style.display="block";
                    scores.push(userscore);
                    userscore=0;

        }else{
            nextquestions();
        }
        

    }
    function nextquestions(event)
    {
        questiontitle.innerHTML=questions[currentQuestion].title;
        answers.innerHTML="";
        let options=questions[currentQuestion].choices;
        for(let index=0;index<options.length;index++){
            let option=options[index];
            let optionelement=document.createElement("li");
            optionelement.innerHTML=option;
            answers.appendChild(optionelement);
            optionelement.addEventListener("click",answerquestion);
        }
    }    
    nextquestions();

    
    function showhighscores(){
            highscores.style.display="block";
            questionWrapper.style.display="none";
            scorelist.innerHTML="";
            completed.style.display="none";
        for(let index=0;index<scores.length;index++){
            let score=scores[index];
           var scoreLi= document.createElement("li");
           scoreLi.innerHTML=(index+1)+"ab."+score;
           scorelist.appendChild(scoreLi);

        }

    }
    viewhighscores.addEventListener("click",showhighscores);
});