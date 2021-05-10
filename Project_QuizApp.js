var QuizData = [
  {
    question:"How old is Sid ?",
    a:'10',
    b:'17',
    c:'30',
    d:'120',
    correct:'c'
  },{
    question:'What is the most used programming language in 2021 ?',
    a:'Java',
    b:'C++',
    c:'python',
    d:'Julia',
    correct:'a'
  },{
    question:'Who is the President of US ?',
    a:'Sidhant Jain',
    b:'Emmanuel Macron',
    c:'Donald Trump',
    d:'Joe Biden',
    correct:'d'
  },{
    question:'What does HTML stand for ?',
    a:'HyperText Markup Language',
    b:'Cascading Style Sheet',
    c:'Document Model Object',
    d:'Application Programming Interface',
    correct:'a'
  },{
    question:'Which year did JavaScript was launched ?',
    a:'1996',
    b:'1999',
    c:'2010',
    d:'None of the above'
  }
];

var a_text = $('#a_text');
var b_text = $('#b_text');
var c_text = $('#c_text');
var d_text = $('#d_text');
var questionElement = $('#question');
var button = $('#btn');
var answers = $('.answer');


var CurrentQuestion = 0;

//var answer = undefined;

var score =0;

loadQuiz();

function loadQuiz(){

  deSelect();

  questionElement.text(QuizData[CurrentQuestion].question);

  a_text.text(QuizData[CurrentQuestion].a);
  b_text.text(QuizData[CurrentQuestion].b);
  c_text.text(QuizData[CurrentQuestion].c);
  d_text.text(QuizData[CurrentQuestion].d);

}

function getSelected(){


  let answer = undefined;

  answers.each(function(answerEl) {
    if($(this).prop("checked")){
      answer = $(this).attr("id");
    }
  })


  return answer;
}

function deSelect(){
  answers.each(function(answerEl){
    $(this).prop('checked', false);
  })
}

button.on('click',()=>{

  var answer = getSelected();

  console.log(answer);
  console.log(QuizData[CurrentQuestion].correct);

  if(answer){
    if(answer === QuizData[CurrentQuestion].correct){
      score++;
    }

    CurrentQuestion++;
    if(CurrentQuestion < QuizData.length){

        loadQuiz();

    } else {
      alert("You finished!");
      alert("Score: "+score);
    }
  }
});
