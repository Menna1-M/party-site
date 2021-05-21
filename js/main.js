$(".open").click(function(){
      if ($("#options").css("left")=='-250px' && $('.open').css('left')=='0px')
      {
            $("#options").animate({left:'0px'},1000);
            $('.open').animate({left:'250px'},1000);
      }else
      {
            $("#options").animate({left:'-250px'},1000);
            $('.open').animate({left:'0px'},1000);   
      }
});
$('.close-icon').click(function(){
      $("#options").animate({left:'-250px'},1000);
      $('.open').animate({left:'0px'},1000); 
})

$('#options a').click(function(e){
      let aHrefa = $(e.target).attr("href");
      // console.log(aHrefa)
      let sectionOffset = $(aHrefa).offset().top;
      $("html,body").animate({scrollTop:sectionOffset},1500);
})


$("#singers .parag:first").css("display","block")
$("#singers h3").click(function(){
      $(this).next().slideToggle(500);
      $("#singers .parag").not($(this).next()).slideUp(500);
});


var countDown = new Date("Jan 5, 2022 15:37:25").getTime();
function timer(){
      var now = new Date().getTime();
      var distance =countDown - now ;
      if(distance>0)
      {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("day").innerHTML=`<h3>${days} D</h3>`;
            document.getElementById("hour").innerHTML=`<h3>${hours} h</h3>`;
            document.getElementById("min").innerHTML=`<h3>${minutes} m</h3>`;
            document.getElementById("sec").innerHTML=`<h3>${seconds} s</h3>`;  
            setTimeout(timer,1000);
      }
      else
      {
            document.getElementById("day").innerHTML=`<h3>Expired</h3>`;
            document.getElementById("hour").innerHTML=`<h3>Expired</h3>`;
            document.getElementById("min").innerHTML=`<h3>Expired</h3>`;
            document.getElementById("sec").innerHTML=`<h3>Expired</h3>`; 
      }
}
timer();


$('textarea').keyup(countChar)
function countChar()
{
      var length = $('textarea').val().length;
      var char = 100 - length;
      if (char>0)
      {
            $("#count").text(char);
      }
      else
      {
            $('.finish').text('your available character finished');
            // $('#contact button').attr('is-invalid')
      }
}