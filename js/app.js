
$(document).ready(function(){

//Animations
$('.intro0').fadeIn(3000);

$('.btn-danger').click(function(){
   $('#intro0').hide();
   $('#intro').fadeIn(1500);
});

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
$('.btn-primary').click(function(){
	location.reload();
});
//Questions
var questionList = [];
function questionBlock(question,answer,rightAnswer){
	this.question=question;
	this.answer=answer;
	this.rightAnswer=rightAnswer;
    questionList.push(this);
}
var questionBlock1 = new questionBlock(
	'What question must always be answered Yes?',
	['Are you a human?','Does everyone have a biological mother?','Will everyone die someday?','What does Y-E-S spell?'],
	3
);
var questionBlock2 = new questionBlock(
	'How many sides does a circle have?',
	['Four','None. Its a circle','The back','Two'],
	3
);
var questionBlock3 = new questionBlock (
	'What has a tail but no body?',
	['A human!','A cloud!','A coin!','A monkey!'],
	2
);
var questionBlock4 = new questionBlock(
	'When do you stop at green and go at red?',
	['Watermelon!','Garden','Traffic Light!','In India'],
	0
);
var questionBlock5 = new questionBlock(
	'What word in the English language is always spelled',
	['Onomatopoeia','Incorrectly','Shakespeare','Its possible to spell anything right as long as you learn it'],
	1
);
var answered = false;
var percent = 0;
var numQuestion = 0;
var countCorrect = 0;
$('.questionBlock h3').click(function() {
    if(!answered) {
    if($('.questionBlock h3').index(this) !== questionList[numQuestion].rightAnswer){
        $(this).addClass('wrong');
        $('.answer'+questionList[numQuestion].rightAnswer).addClass('right');
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
	var currentQuestion= questionList[numQuestion];
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
