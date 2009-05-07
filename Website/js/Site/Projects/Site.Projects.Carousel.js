var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.Carousel = new (function(){
	$(document).ready(function(){ 						
		new Adoro.Carousel(document.getElementById("carousel06"),{
			offsetReveal: -35,
			isCircular: true,
			indicators: false,
			automaticDelay: 500,
			animateSpeed: 500
		});

		new Adoro.Carousel(document.getElementById("carousel02"), {
			scrollCount: 2,
			isCircular: true,
			indicators: true,
			stopButton: true,
			startButton: true,
			forwardButton: true,
			backButton: true,
			automaticDirectionBackwards: false,
			animateSpeed: 1000,
			automaticDelay: 500
		});
		
		new Adoro.Carousel(document.getElementById("carousel07"), {
			scrollCount: 2,
			vertical: true,
			isCircular: true,
			indicators: true,
			stopButton: true,
			startButton: true,
			forwardButton: true,
			backButton: true,
			automaticDirectionBackwards: false,
			animateSpeed: 300,
			automaticDelay: 500
		});
	});
});