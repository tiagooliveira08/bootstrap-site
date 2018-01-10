


$(document).ready(function(){
        $window = $(window);
        //Captura cada elemento section com o data-type "background"
        $('div[data-type="background"]').each(function(){
            var $scroll = $(this);   
                //Captura o evento scroll do navegador e modifica o backgroundPosition de acordo com seu deslocamento.            
                $(window).scroll(function() {
                    var yPos = -($window.scrollTop() / $scroll.data('speed')); 
                    var coords = '50% '+ yPos + 'px';
                    $scroll.css({ backgroundPosition: coords });    
                });
       });  



        
	$('.scroll').click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top  },800);

	
});


    });   


$(window).scroll(function(){
	var scrollPos = $(this).scrollTop();
	console.log(scrollPos);
	if(scrollPos > 100){
		$(".navbar").addClass("animateNavbar");
	}else{
		$(".navbar").removeClass("animateNavbar");
	}
});


