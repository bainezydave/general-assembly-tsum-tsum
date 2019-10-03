$(function(){
	function getTsum(){
		var url = $(location).attr('href');
		var splitUrl = url.split("?");
		return splitUrl[1];
	}

	var tsum = getTsum();
	tsums.forEach(function(obj) {
		if(obj.id == tsum) {
			$('#name').append(obj.name)
			$('#description').append(obj.description)
			$('#image').append('<div class="imgArray" id="' + obj.id + '"><img id="profilePic" src="assets/images/' + obj.image + '" alt="' + obj.name + '"></div>');
			$('#imageBack').append('<div class="imgArray" id="' + obj.id + '"><img id="profilePic" src="assets/images/' + obj.image + '" alt="' + obj.name + '"></div>');
			$('#type').append(obj.type)
			$('#color').append(obj.color)
			$('#eye-color').append(obj.eye_color)
			$('#hair').append(obj.hair)
			$('#hair-color').append(obj.hair_color)
		} else {
			console.log("Tsum not found");
		}

	});

});
