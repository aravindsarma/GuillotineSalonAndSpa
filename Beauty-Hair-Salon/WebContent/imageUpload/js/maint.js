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
		responseObject = JSON.parse(xhttp.responseText);
		var content = ' ';
		var stylistInfo = responseObject.stylistImages.stylistInfo;
		for (var i = 0; i < stylistInfo.length; i++) {
			var stylistImgUrl = '../img/'+ stylistInfo[i].imgName;
			var stylistName = stylistInfo[i].stylistName;
			var stylistRole = stylistInfo[i].stylistRole;
			var stylistRole2 = stylistInfo[i].stylistRole2;
			
			content += '<a href="stylistInfo.html?index='+i+'"';
			content += '<div class="stylist  editImage" style="background-image:url('
					+ stylistImgUrl
					+ ');background-size:cover;">';
			content += '<div class="a">';
			content += '<div class="Center-Container is-Table">';
			content += '<div class="Table-Cell">';
			content += '<div class="Center-Block">';
			content += '<h4>'+stylistName+'</h4><br/>';
			content += '<b>'+stylistRole+'</b>';
			if(stylistRole2){
				content += '<br/><b>'+stylistRole2+'</b>';
			}
			content += '<br/><b>***edit***</b>';
			content += '</div>';
			content += '</div>';
			content += '</div>';
			content += '</div>';
			content += '</div>';
			content += '</a>';
			if ((i+1) === responseObject.stylistImages.stylistInfo.length) {
				content += '<a href="stylistInfo.html?index=new"';
				content += '<div class="stylist editImage">';
				content += '<div class="a">';
				content += '<div class="Center-Container is-Table">';
				content += '<div class="Table-Cell">';
				content += '<div class="Center-Block">';
				content += '<h4>Add New</h4><br/>';
				content += '<b>Stylist Info</b>';
				content += '</div>';
				content += '</div>';
				content += '</div>';
				content += '</div>';
				content += '</div>';
				content += '</a>';
		    	document.getElementById("stylistImages").innerHTML = content;
		    }
		}		
}

xhttp.open('GET','../data/stylistImages.json', true);        // Prepare the request
xhttp.send(null); 