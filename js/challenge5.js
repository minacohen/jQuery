console.log("here");
var msg = "Hover over an image below.";
$("img").each(function() {
	console.log("check")
	$(this).mouseover(function() {
		console.log("check")
		$("#image").css("background-image", "url('"+this.src+"')");
		$("#image").html(this.alt);
	});
	$(this).focus(function() {
		$("#image").css("background-image", "url('"+this.src+"')");
		$("#image").html(this.alt);
	});
	$(this).mouseleave(function() {
		$("#image").css("background-image", "url('')");
		$("#image").html(msg);
	});
	$(this).blur(function() {
		$("#image").css("background-image", "url('')");
		$("#image").html(msg);
	});
});
