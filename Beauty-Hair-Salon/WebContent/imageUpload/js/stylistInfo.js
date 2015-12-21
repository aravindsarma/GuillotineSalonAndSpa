/**
 * imageUpload/maint.js to help with stylist image upload
 */
//Initial Load
xhttp = new XMLHttpRequest(); 

xhttp.onload = function(){
	if (xhttp.status === 200) {
		loadContent();
	}
};

function loadContent(){
	var i = location.search.split('index=')[1];
	if(i==='new'){
		var content = ' ';
		content += '<h2>New</h2>';
		document.getElementById("profile").innerHTML = content;
	}else{
		responseObject = JSON.parse(xhttp.responseText);
		var stylistInfo = responseObject.stylistImages.stylistInfo;
		var stylistImgUrl = '../img/'+ stylistInfo[i].imgName;
		var stylistName = stylistInfo[i].stylistName;
		var stylistRole = stylistInfo[i].stylistRole;
		var stylistRole2 = stylistInfo[i].stylistRole2;
		var content = ' ';
		content += '<div class="row">';
		content += '<div class="col-sm-12">';
		content += '<div class="thumb">';
		content += '<div class="img-post">';
		content += '<img src="'+stylistImgUrl+'" class="img-responsive img-circle">';
		content += '</div>';
		content += '</div>';
		content += '<h2>'+stylistName+'</h2>';
		content += '<b>'+stylistRole+'</b>';
		if(stylistRole2){
			content += '<br/><b>'+stylistRole2+'</b>';
		}
		content += '</div>';
		content += '</div>';
		document.getElementById("profile").innerHTML = content;
	}
}

xhttp.open('GET','../data/stylistImages.json', true);        // Prepare the request
xhttp.send(null); 