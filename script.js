/** Script Rules Original **/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/** Script Buttons Original **/
$(document).ready(function(){
	var play1 = "";
	var play2 = "";
	var vez = play1;
	
	let attempt = document.getElementById('resu');
	var resultado = 0;	
	
	var random ;
	
	$("#paper").click(function(){
		random = Math.floor(Math.random() * 3 + 1);
		
		play1 = "paper";
		$('.cont_img').hide();
		$('#triangle').hide();
		$('#paper').show();
		$('#paper').css({top: '110px'});
		
		vez = play2;
		
		switch (random){
			case 1:
				play2 = "paper";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '110px', left: '-25px'
					,backgroundColor: 'hsl(230, 89%, 62%)'});
				$('.img2').hide();
				$('#paper_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});
				
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '410px', left: '100px'});
				break;
				
			case 2:
				play2 = "scissors";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '110px', left: '-25px'
					,backgroundColor: 'hsl(39, 89%, 49%)'});
				$('.img2').hide();
				$('#scissors_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});
				
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '410px', left: '5px'});
				break;
			
			case 3:
				play2 = "rock";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '115px', left: '-25px'
					,backgroundColor: 'hsl(349, 71%, 52%)' });
				$('.img2').hide();
				$('#rock_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});
				
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '420px', left: '-10px'});
				break;			
		}
		
		if(play1 == "paper" && play2 == "rock" ){
			resultado = resultado + 1;
			$('#replay').show();
			$('.text-end').hide();
			$('#win').show().css({position: 'relative',
			 top: '199px', left: '110px', width: '30%', 
			 fontSize: '1.3em'}).text('You Win');
			$('#again').css({position: 'relative', top: '130px', left: '-1px'});
			$('button').css({top: '200px', left: '8px'});
			attempt.innerHTML =  resultado ;	
		} else if(play1 == "paper" && play2 == "scissors"){
			$('#replay').show();
			$('.text-end').hide();
			$('#lose').show().css({position: 'relative',
			top: '200px', left: '100px', width: '40%', 
			fontSize: '1.4em'}).text('You Lose');
			$('#again').css({position: 'relative', top: '130px', left: '-1px'});
			$('button').css({top: '200px', left: '8px'});	
		} else{
			$('#replay').show();
			$('.text-end').hide();
			$('#lose').show().css({position: 'relative',
			top: '140px', left: '100px', width: '40%', 
			fontSize: '1.4em'}).text('Empathy');
			$('#again').css({position: 'relative', top: '130px', left: '-1px'});
			$('button').css({top: '150px', left: '8px'});
		}			
	});
	
	$("#scissors").click(function(){
		random = Math.floor(Math.random() * 3 + 1);
		
		play1 = "scissors";
		$('.cont_img').hide();
		$('#triangle').hide();
		$('#scissors').show();
		$('#scissors').css({float: 'left', top: '100px', right: '-10px'})
		
		vez = play2;
		
		switch (random){
			case 1:
				play2 = "paper";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '100px', left: '-25px'
					,backgroundColor: 'hsl(230, 89%, 62%)'});
				$('.img2').hide();
				$('#paper_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});

				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '415px', left: '100px'});
				break;
		
			case 2:
				play2 = "scissors";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '103px', left: '-25px'
					,backgroundColor: 'hsl(39, 89%, 49%)'});
				$('.img2').hide();
				$('#scissors_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});
		
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '415px', left: '100px'});
				break;
		
			case 3:
				play2 = "rock";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '100px', left: '-25px'
					,backgroundColor: 'hsl(349, 71%, 52%)' });
				$('.img2').hide();
				$('#rock_img2').fadeIn(1000)
				.css({backgroundColor: 'hsl(0, 0%, 100%)'});
		
		
		
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '420px', left: '5px'});
				break;
		}
		
		if(play1 == "scissors" && play2 == "paper" ){
			resultado = resultado + 1;
			$('#replay').show();
			$('.text-end').hide();
			$('#win').show().css({position: 'relative',
			top: '139px', left: '110px', width: '30%', 
			fontSize: '1.3em'}).text('You Win');
			$('#again').css({position: 'relative', top: '90px', left: '-1px'});
			$('button').css({top: '150px', left: '8px'});
			attempt.innerHTML =  resultado ;	
		} else if(play1 == "scissors" && play2 == "rock"){
			$('#replay').show();
			$('.text-end').hide();
			$('#lose').show().css({position: 'relative',
			top: '200px', left: '100px', width: '40%', 
			fontSize: '1.4em'}).text('You Lose');
			$('#again').css({position: 'relative', top: '130px', left: '-1px'});
			$('button').css({top: '200px', left: '8px'});	
		} else{
			$('#replay').show();
			$('.text-end').hide();
			$('#lose').show().css({position: 'relative',
			top: '140px', left: '100px', width: '40%', 
			fontSize: '1.4em'}).text('Empathy');
			$('#again').css({position: 'relative', top: '130px', left: '-1px'});
			$('button').css({top: '150px', left: '8px'});
		}	
	});
	
	$("#rock").click(function(){
		random = Math.floor(Math.random() * 3 + 1);
		
		play1 = "rock";
		$('.cont_img').hide();
		$('#triangle').hide();
		$('#rock').show();
		$('#rock').css({float: 'left', top: '100px', left: '0'})
		
		
		vez = play2;
		
		switch (random){
			case 1:
				play2 = "paper";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '90px', left: '-25px'
					,backgroundColor: 'hsl(230, 89%, 62%)'});
				$('.img2').hide();
				$('#paper_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});
			
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '424px', left: '100px'});
				break;
		
			case 2:
				play2 = "scissors";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '100px', left: '-25px'
					,backgroundColor: 'hsl(39, 89%, 49%)'});
				$('.img2').hide();
				$('#scissors_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});
		
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '425px', left: '100px'});
				break;
		
			case 3:
				play2 = "rock";
				$('#null').fadeIn(1000)
					.css({padding: '16px'
					, top: '100px', left: '-25px'
					,backgroundColor: 'hsl(349, 71%, 52%)' });
				$('.img2').hide();
				$('#rock_img2').fadeIn(1000)
					.css({backgroundColor: 'hsl(0, 0%, 100%)'});		
		
				$('.msg').show();
				$('#play1').css({top: '520px', left: '-95px'});
				$('#play2').css({top: '425px', left: '-10px'});
			break;		
		}
		
		if(play1 == "rock" && play2 == "scissors" ){
			resultado = resultado + 1;
			$('#replay').show();
			$('.text-end').hide();
			$('#win').show().css({position: 'relative',
			top: '150px', left: '110px', width: '30%', 
			fontSize: '1.3em'}).text('You Win');
			$('#again').css({position: 'relative', top: '100px', left: '-1px'});
			$('button').css({top: '160px', left: '8px'});
			attempt.innerHTML =  resultado ;	
		} else if(play1 == "rock" && play2 == "paper"){
			$('#replay').show();
			$('.text-end').hide();
			$('#lose').show().css({position: 'relative',
			top: '150px', left: '100px', width: '40%', 
			fontSize: '1.4em'}).text('You Lose');
			$('#again').css({position: 'relative', top: '130px', left: '-1px'});
			$('button').css({top: '160px', left: '8px'});	
		} else{
			$('#replay').show();
			$('.text-end').hide();
			$('#lose').show().css({position: 'relative',
			top: '210px', left: '100px', width: '40%', 
			fontSize: '1.4em'}).text('Empathy');
			$('#again').css({position: 'relative', top: '130px', left: '-1px'});
			$('button').css({top: '200px', left: '8px'});
		}		
	});
	
	$('#again').click(function(){
	
		$('.cont_img').show();
		
		$('#msgs').hide();
		$('#replay').hide();
		$('#null').hide();
				
		$('#paper').css({top: '80px' });
		$('#scissors').css({float: 'right', left: '-1px', top: '80px' });
		$('#triangle').css({height: '35%'});
		$('#rock').css({ position: 'relative', float: 'left', 
		 left: '100px', top: '-90px'});
		
		$('button').css({top: '120px', left: '10%'});
	});
});
