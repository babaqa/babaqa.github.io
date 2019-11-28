$(document).ready(function(){
	$("#clearbutton").attr('disabled', true);
	$("#search").on("keyup", function() {
		$("#clearbutton").attr('disabled', false);
		var value = $(this).val().toLowerCase();
		if($(this).val()){
			$("#qatable ls").filter(function() {
				$(this).toggle($("th:first", this).text().toLowerCase().indexOf(value) > -1);
			});
		}else{
			$("#clearbutton").attr('disabled', true);
			$("#qatable ls").filter(function() {
				$(this).toggle(false);
			});
		}
	});
});

function ClearFields(){
	$("#search").val("");
	$("#search").focus();
	$("#clearbutton").attr('disabled', true);
	$("#qatable ls").filter(function() {
		$(this).toggle(false);
	});
};	
