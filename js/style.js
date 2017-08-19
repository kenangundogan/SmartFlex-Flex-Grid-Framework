$( document ).ready(function() {
    console.log( "ready!" );
  
	$('.sub-menu li').click(function() { 
		var target = $(this).attr('id');
        var headHeight = $('.head').outerHeight();
        console.log(headHeight);
		$('html, body').animate({scrollTop: $('.'+target+'-content').offset().top - headHeight}, 1000);
        activeMenu($(this));
    }); 
    function activeMenu(obj){
		$('li').removeClass("active");
		$(obj).addClass("active");
	}

});



