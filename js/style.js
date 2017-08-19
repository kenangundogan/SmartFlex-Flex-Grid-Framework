$( document ).ready(function() {
    console.log( "ready!" );
  
	$('.menu span').click(function() { 
		var target = $(this).attr('id');
        var headHeight = $('.head').outerHeight();
		$('html, body').animate({scrollTop: $('.'+target+'-content').offset().top - headHeight}, 1000);
        activeMenu($(this));
        console.log($(this)); 
    }); 
    function activeMenu(obj){
		$('.menu span').removeClass("active");
		$(obj).addClass("active");
	}

});



