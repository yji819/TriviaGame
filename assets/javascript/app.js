window.onload = function() {
// function check() {
var question1 = $("input[name= 'q1']:checked").val();
var question2 = $("input[name= 'q2']:checked").val();
var question3 = $("input[name= 'q3']:checked").val();
var correct = 0;
var wrong = 0;
var remainTime = 7;
var interval = setInterval(countDown, 1000)

$('input[name="q1"]').change(function(){
    if($('#q1r').prop('checked')){
        correct++;
    }else{
        wrong++;
    }
});
$('input[name="q2"]').change(function(){
    if($('#q2r').prop('checked')){
        correct++;
    }else{
        wrong++;
    }
});
$('input[name="q3"]').change(function(){
    if($('#q3r').prop('checked')){
        correct++;
    }else{
        wrong++;
    }
});

function countDown(){
    remainTime--;
    $("#timer").text(remainTime)
    if (remainTime == "0"){
        result();
        clearInterval(interval);
    }
}

function result(){
    // if (question1 == "tomato"){
    //     correct++;
    // }else{
    //     wrong++;
    // }
    
    // if (question2 == "21"){
    //     correct++;
    // }else{
    //     wrong++;
    // }
    
    // if (question3 == "1799"){
    //     correct++;
    // }else{
    //     wrong++;
    // }
    
 $("#results").text("Number of correct answers " + correct);
 $("#results").append("  Number of wrong answers " + wrong);

}


console.log(question1);
console.log(correct);
console.log(wrong);




















}