
var isMobile = 0;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	isMobile = 1;
}else{
	isMobile = 0;
}

$(function(){
		// $('body').jpreLoader({
		// 	splashID: "#jSplash",
		// 	loaderVPos: '50%',
		// 	splashVPos: '50%',
		// 	autoClose: true
		// }, function() { //callback function
		// });

		$(window).scroll(function(){
			var sx = $(window).scrollTop();
			var ah1 = $('#a01').offset().top-200;
			var ah2 = $('#a02').offset().top-200;
			var ah3 = $('#a03').offset().top-200;
			var ah4 = $('#a04').offset().top-200;
			var ah5 = $('#a05').offset().top-300;
			var ah6 = $('#a06').offset().top-300;
			if(sx>=ah1 && sx<ah2){
					$(".menu ul li a" ).removeClass('act');
                  $(".menu ul li:nth-of-type(1) a").addClass('act');
                  ACTION(1);     
                }else if(sx>=ah2 && sx<ah3){
                	$(".menu ul li a" ).removeClass('act');
                	$(".menu ul li:nth-of-type(2) a").addClass('act');
                	ACTION(2);                	 
                }else if(sx>=ah3 && sx<ah4){
                	$(".menu ul li a" ).removeClass('act');
                	$(".menu ul li:nth-of-type(3) a").addClass('act');
                	ACTION(3);               	        
                }else if(sx>=ah4 && sx<ah5){
                	$(".menu ul li a" ).removeClass('act');
                	$(".menu ul li:nth-of-type(4) a").addClass('act');
                	ACTION(4);
                	return false;        
                }else if(sx>=ah5 && sx<ah6){
                	$(".menu ul li a" ).removeClass('act');
                	$(".menu ul li:nth-of-type(5) a").addClass('act');
                	ACTION(5); 
                }else if(sx>=ah6){
                	$(".menu ul li a" ).removeClass('act');
                	$(".menu ul li:nth-of-type(6) a").addClass('act');
                	ACTION(6);    
                }else if(sx<=0){
                	history.go(0);    
                }
		})
		GOTOP();
		MENU();
		ACTION();

		// var swiper = new Swiper('.swiper-container', {
		// 	loop: true,
		// 	pagination: {
		//         el: '.swiper-pagination',
		//         clickable: true,
		//         renderBullet: function (index, className) {
		//         return '<span class="' + className + '">' + (index + 1) + '</span>';
	 //        	},
	 //      	},
	 //      	autoplay: {
  //     			delay: 7000,
  //     			disableOnInteraction: false,
  //   		}
		// });
});

function GOTOP(){
	$('.gotop').on("click", function(){
	  	$('html,body').animate({scrollTop:0},800);
	});
	$(window).scroll(function(){
       var Y = $(window).scrollTop();
       if(Y>800){
        $(".gotop").stop(true,false).animate({ bottom:50,opacity:1},800); 
        }else{
        $(".gotop").stop(true,false).animate({ bottom:20,opacity:0},800); 
        }
    });
}


function MENU(){
 	$(".menu ul li:nth-of-type(1) a").on("click", function(){
			$('html,body').stop().animate({scrollTop:$("#a01").offset().top},800);
			$(".menu ul li a" ).removeClass('act');
			$(this).addClass('act');
			ACTION(1);
			return false;
	});
	$(".menu ul li:nth-of-type(2) a").on("click", function(){
			$('html,body').stop().animate({scrollTop:$("#a02").offset().top},800);
			$(".menu ul li a" ).removeClass('act');
			$(this).addClass('act');
			ACTION(2);
			return false;
	});
	$(".menu ul li:nth-of-type(3) a").on("click", function(){
			$('html,body').stop().animate({scrollTop:$("#a03").offset().top},800);
			$(".menu ul li a" ).removeClass('act');
			$(this).addClass('act');
			ACTION(3);
			return false;
	});
	$(".menu ul li:nth-of-type(4) a").on("click", function(){
			$('html,body').stop().animate({scrollTop:$("#a04").offset().top},800);
			$(".menu ul li a" ).removeClass('act');
			$(this).addClass('act');
			ACTION(4);
			return false;
	});
	$(".menu ul li:nth-of-type(5) a").on("click", function(){
			$('html,body').stop().animate({scrollTop:$("#a05").offset().top},800);
			$(".menu ul li a" ).removeClass('act');
			$(this).addClass('act');
			ACTION(5);
			return false;
	});
	$(".menu ul li:nth-of-type(6) a").on("click", function(){
			$('html,body').stop().animate({scrollTop:$("#a06").offset().top},800);
			$(".menu ul li a" ).removeClass('act');
			$(this).addClass('act');
			ACTION(6);
			return false;
	});
	
}

function ACTION(num){
	switch(num){
		case 1:
			$("#b01").stop().delay(800).animate({opacity: 1, paddingTop:0});
		break;
		case 2:
			$("#b02").stop().delay(800).animate({opacity: 1, paddingTop:0});
		break;
		case 3:
			$("#b03").stop().delay(800).animate({opacity: 1, paddingTop:0});
		break;
		case 4:
			$("#b04").stop().delay(800).animate({opacity: 1, paddingTop:0});
		break;
		case 5:
			$("#b05").stop().delay(800).animate({opacity: 1, paddingTop:0});
		break;
		case 6:
			$("#b06").stop().delay(800).animate({opacity: 1, paddingTop:0});
		break;
	}

}
