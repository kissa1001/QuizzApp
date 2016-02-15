
//Questions
function Question(question,answer,rightAnswer){
    this.question=question;
    this.answer=answer;
    this.rightAnswer=rightAnswer;
}
function Game(questions){
    this.questions=questions;
}
Game.prototype.start=function(){
    $('#intro').fadeIn(1500);
    $("#mugsy").click(function(){
        $('#intro').hide();
        $('#main').fadeIn(1500);
        $('.mango').hide();
        $('.mango-result').hide();
        $('.mugsy-result').fadeIn(1500);
    });
    
    $("#mango").click(function(){
        $('#intro').hide();
        $('#main').fadeIn(1500);
        $('.mugsy').hide();
        $('.mugsy-result').hide();
        $('.mango-result').fadeIn(1500);
    });
}
var Question1 = new Question(
    'What question must always be answered Yes?',
    ['Are you a human?','Does everyone have a biological mother?','Will everyone die someday?','What does Y-E-S spell?'],
    3
    );
var Question2 = new Question(
    'How many sides does a circle have?',
    ['Four','None. Its a circle','The back','Two'],
    3
    );
var Question3 = new Question (
    'What has a tail but no body?',
    ['A human!','A cloud!','A coin!','A monkey!'],
    2
    );
var Question4 = new Question(
    'When do you stop at green and go at red?',
    ['Watermelon!','Garden','Traffic Light!','In India'],
    0
    );
var Question5 = new Question(
    'What word in the English language is always spelled',
    ['Onomatopoeia','Incorrectly','Shakespeare','Its possible to spell anything right as long as you learn it'],
    1
    );
var questions = [Question1,Question2,Question3,Question4,Question5];
var game = new Game(questions);
$(document).ready(function(){

//Animations
$('.intro0').fadeIn(3000);
$('.btn-danger').click(function(){
 $('#intro0').hide();
 game.start();
});

$('.btn-primary').click(function(){
	location.reload();
});

var answered = false;
var percent = 0;
var numQuestion = 0;
var countCorrect = 0;
$('.questionBlock h3').click(function() {
    if(!answered) {
        if($('.questionBlock h3').index(this) !== game.questions[numQuestion].rightAnswer){
            $(this).addClass('wrong');
            $('.answer'+game.questions[numQuestion].rightAnswer).addClass('right');
            $('.ready').hide();
            $('.incorrect').show();
            $('.correct').hide();
            playBoo();
        }
        else {
           $('.ready').hide();
           $('.correct').show();
           $('.incorrect').hide();
           $(this).addClass('right');
           countCorrect++;
           playClap();
       }
       numQuestion++;
       percent= numQuestion*20;
       progress();
   }
   answered = true;
});
var progress = function(){
    $('.progress-bar').css('width', percent + '%').attr('aria-valuenow', percent);
    $('#percent').text(percent) ;    
};

var nextQuestion = function(){
    answered = false;
    var currentQuestion= game.questions[numQuestion];
    if(numQuestion < 5 ){
        $('.question').text(currentQuestion.question);
        $('.answer0').text(currentQuestion.answer[0]);
        $('.answer1').text(currentQuestion.answer[1]);
        $('.answer2').text(currentQuestion.answer[2]);
        $('.answer3').text(currentQuestion.answer[3]);
        $('.questionBlock h3').removeClass('right');
        $('.questionBlock h3').removeClass('wrong');
        $('.ready').show();
        $('.correct').hide();
        $('.incorrect').hide();
    }
    else{
    	$('#main').hide();
    	$('#gameOver').fadeIn(2500);
        scoreCheck();
    }

};
$('#next').click (function(){
    nextQuestion();
});

var scoreCheck = function(){
   if(countCorrect == 5){
      $('#result').text('Congratulations, You became a millionare!');
      $('.win').fadeIn(1500);
      $('.fail').hide();
  }
  else{
      $('#result').text('Opps! You answered correct only'+' '+ countCorrect + ' '+'questions');
      $('.fail').fadeIn(1500);
      $('.win').hide();
  }
};


function playBoo () {
  $('#boo')[0].volume = 0.5;
  $('#boo')[0].load();
  $('#boo')[0].play();
}
function playClap () {
  $('#clap')[0].volume = 0.5;
  $('#clap')[0].load();
  $('#clap')[0].play();
}
nextQuestion();
});