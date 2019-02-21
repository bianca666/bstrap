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
				homeInner.style.background = 'url(https://github.com/bianca666/bstrap/blob/master/imgs/landingbg.jpg)';
			}
			if(width == 768 && ori == 2){
				homeInner.style.background = 'url(https://github.com/bianca666/bstrap/blob/master/imgs/landing_md.jpg)';
			}

		console.log(orientation, ori, width, homeInner.style.background);

		}
		
		if(!window.orientation){
			var fixed = document.getElementsByClassName('fixed')[0];
			var homeInner = document.getElementsByClassName('home-inner')[0];
			homeInner.style.backgroundAttachment = 'fixed';
			fixed.style.backgroundAttachment = 'fixed';
		}

		//updateOrientation();
		/*../imgs/landing_md.jpg*/
		//window.addEventListener('orientationchange', updateOrientation, false);
	}

	 window.addEventListener("DOMContentLoaded",init,false);  
	
})();

