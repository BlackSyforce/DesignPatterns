$(function() {
	var $img = $("#img");

	var seasons = {
		winter: function() {
			$img.animate({
				left: "120px"
			});
		},
		summer: function() {
			$img.animate({
				top: "120px"
			});
		},
		autumn: function() {
			$img.animate({
				left: "20px"
			});
		},
		spring: function() {
			$img.animate({
				top: "20px"
			});
		}
	};

	$(".button-container span").on("click", function(e) {
		var attr = $(e.target).attr("class");
		var src = seasons[attr];

		if (src) {
			src();
		}
	});
});