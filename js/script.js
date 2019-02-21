(function(){
	var init = function() {
		var updateOrientation = function() {
			var orientation = window.orientation;
			var ori;
			switch(orientation){
				case 90:
				case -90:
					ori = 1;	/*landscape*/
					break;
				default:
					ori = 2;  /*portrait*/
					break;
			}

			var homeInner = document.getElementsByClassName('home-inner')[0];
			var width = document.body.clientWidth;
			if(width == 1024 && ori == 1){
				homeInner.style.background = 'url(imgs/landingbg.jpg)';
			}

		console.log(orientation, ori, homeInner.style.background);

		}
		
		updateOrientation();
		/*../imgs/landing_md.jpg*/
		window.addEventListener('orientationchange', updateOrientation, false);
	}

	 window.addEventListener("DOMContentLoaded",init,false);  
	
})();

