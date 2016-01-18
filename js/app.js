
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
function questionBlock(question,answer,rightAnswer){
	this.question=question;
	this.answer=answer;
	this.rightAnswer=rightAnswer;
}
var questionBlock1 = new questionBlock(
	'What question must always be answered Yes?',
	['Are you a human?','Does everyone have a biological mother?','Will everyone die someday?','What does Y-E-S spell?'],
	3
);
var questionBlock2 = (
	'How many sides does a circle have?',
	['Four','None. Its a circle','The back','Two'],
	3
);
var questionBlock3 = (
	'What has a tail but no body?',
	['A human!','A cloud!','A coin!','A monkey!'],
	2
);
var questionBlock4 = (
	'When do you stop at green and go at red?',
	['Watermelon!','Garden','Traffic Light!','In India'],
	0
);
var questionBlock5 = (
	'What word in the English language is always spelled',
	['Onomatopoeia','Incorrectly','Shakespeare','Its possible to spell anything right as long as you learn it'],
	1
);
$('h3').click(function() {
    if($('h3').index(this) !== questionBlock['rightAnswer']){
        $(this).css('background-color','#FE2E2E');
        $('.rightAnswer').css('background-color','#088A08');
        $('.ready').hide();
        $('.incorrect').show();
        playBoo();
    }
    else {
    	$('.ready').hide();
    	$('.correct').show();
    	$(this).css('background-color','#088A08');
    	playClap();
    	progress();
    }
    nextQuestion();
});
var progress = function(){
	var value = 0;
	value++;
    $('.progress-bar').css('width', value+'20%').attr('aria-valuenow', value); 
};
/*
var nextQuestion = function(){
	var currentQuestion= questionBlock(this);
    if(currentQuestion <=5 ){
        var newQuestion = currentQuestion.next();
        currentQuestion.fadeOut(1000).removeClass(questionBlock);
        nextSlide.fadeIn(1000).addClass(questionBlock);
    }
    else{
    	$('#main').hide();
    	$('#gameOver').fadeIn(2500);
    }
};
 var scoreCheck = function(){
 	var corectAnswers = ($('h3').index(this) == questionBlock['rightAnswer']);
     if(correctAnswers == 5){
     	$('#result').text('Congratulations, You became a millionare!');
     	$('.win').fadeIn(1500);
     	$('.fail').hide();
     }
     else{
     	$('#result').text('Opps! You answered correct only'+' '+ correctAnswers+ ' '+'questions');
     	$('.fail').fadeIn(1500);
     	$('.win').hide();
     }
 };
 */

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
});