$(function() {
	var $img = $("#img");

	var seasons = {
		winter: "./img/winter.png",
		summer: "./img/summer.png",
		autumn: "./img/autumn.png",
		spring: "./img/spring.png"
	};

	$(".button-container span").on("click", function(e) {
		var attr = $(e.target).attr("class");
		var src = seasons[attr];

		if (src) {
			$img.attr("src", src);
		}
	});
});