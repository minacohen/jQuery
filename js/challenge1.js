$("#subscribe").change(function () {
	if ($(this).is(":checked")) {
		console.log("Selected");
		$("#emailField").css("display", "block");
	}
	else {
		console.log("Not Selected");
		$("#emailField").css("display", "none");
	}
})
