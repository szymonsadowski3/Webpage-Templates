window.onload = function() {
	
	
	
	$("#slider").owlCarousel({
     
          navigationText: 	["poprz.","nast."],
		  navigation : true, // Show next and prev buttons
          slideSpeed : 600,
          paginationSpeed : 400,
          singleItem:true,
		  autoPlay:5000
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
	
}

