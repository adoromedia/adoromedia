var Site = Site || {};
Site.FAQ = Site.FAQ || {};

Site.FAQ.QuestionToggler = new (function() {
	$(document).ready(init);

	function init() {

		var $questions  = $(".question");
		for(var i = 0; i < $questions.length; i++) {
			new Toggler($($questions[i]));
		}
		

	}
	
	
	function Toggler(root) {
		var $link = root.find("h2 a");
		var $answer = $(document.getElementById($link.get(0).hash.slice(1)));
		root.addClass("answerHidden");

		$link.bind("click", toggle);
		
		function toggle(e) {
			if($answer.css("display") === "none") {
				root.removeClass("answerHidden");		
			}
			else {
				root.addClass("answerHidden");
			}
			return false;
		}		
	}
	
});