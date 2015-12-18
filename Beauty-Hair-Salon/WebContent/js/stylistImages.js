/**
 * ImageUpload.js to help with stylist image upload
 */
xhttp = new XMLHttpRequest();
xhttp.onload = function() {
	if (xhttp.status === 200) {
		responseObject = JSON.parse(xhttp.responseText);
		var content = ' ';
		var stylistInfo = responseObject.stylistImages.stylistInfo;
		for (var i = 0; i < stylistInfo.length; i++) {
			content += '<div class="stylist" style="background-image:url(img/'
					+ stylistInfo[i].imgName
					+ ');background-size:cover;">';
			content += '<div class="a not-active">';
			content += '<div class="Center-Container is-Table">';
			content += '<div class="Table-Cell">';
			content += '<div class="Center-Block">';
			content += '<h4>'+stylistInfo[i].stylistName+'</h4><br/>';
			content += '<b>'+stylistInfo[i].stylistRole+'</b>';
			if(stylistInfo[i].stylistRole2){
				content += '<br/><b>'+stylistInfo[i].stylistRole2+'</b>';
			}
			content += '</div>';
			content += '</div>';
			content += '</div>';
			content += '</div>';
			content += '</div>';
			if ((i+1) === responseObject.stylistImages.stylistInfo.length) {
		    	  document.getElementById("stylistImages").innerHTML = content;
		    }
		}		
	}
};
xhttp.open('GET', 'data/stylistImages.json', true);
xhttp.send(null);