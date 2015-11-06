//Initial Load
xhr = new XMLHttpRequest(); 
	
xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '<tbody><tr>';
    newContent += '<td><h3>Service</h3></td>';
    newContent += '<td></td><td><h3>Designer</h3></td>';
    newContent += '<td></td><td><h3>Creative Designer</h3></td>';
    newContent += '<td></td><td><h3>Master Designer</h3></td>';
    newContent += '<td></td><td><h3>Expert Designer</h3></td>';
    newContent += '</tr>';
    var n = 0;
    for (var i = 0; i < responseObject.lines.length; i++) { // Loop through object
      if((i != 0) && (responseObject.lines[i-1].service != responseObject.lines[i].service)) {
    	  newContent += '</tbody>';
    	  console.log(newContent);
    	  document.getElementById(responseObject.lines[i-1].service).innerHTML = newContent;
    	  newContent = '<tbody>';
      }
      
      if (responseObject.lines[i].service != 'skincare' && responseObject.lines[i].service != 'microderm' &&
    	  responseObject.lines[i].service != 'hairremoval' && responseObject.lines[i].service != 'massage') { 
	      newContent += '<tr>';
	      newContent += '<td><input type="text" class="style" value="' + responseObject.lines[i].style + '"></td>';
	      if (responseObject.lines[i].designer.search("<sup>") === -1) { 
	      newContent += '<td><input class="dchecked" type="checkbox" name="from"/></td><td><input type="text" class="designer" value="' + responseObject.lines[i].designer + '"></td>';
	      }
	      else {
	      responseObject.lines[i].designer = responseObject.lines[i].designer.replace('<sup>from</sup>', '')
	      newContent += '<td><input class="dchecked" type="checkbox" name="from" checked="checked"/></td><td><input type="text" class="designer" value="' + responseObject.lines[i].designer + '"></td>';  
	      }
	      if (responseObject.lines[i].creativeDesigner.search("<sup>") === -1) { 
	      newContent += '<td><input class="cchecked" type="checkbox" name="from"/></td><td><input type="text" class="creativeDesigner" value="' + responseObject.lines[i].creativeDesigner + '"></td>';
	      }
	      else {
	    	  responseObject.lines[i].creativeDesigner = responseObject.lines[i].creativeDesigner.replace('<sup>from</sup>', '')
	    	  newContent += '<td><input class="cchecked" type="checkbox" name="from" checked="checked"/></td><td><input type="text" class="creativeDesigner" value="' + responseObject.lines[i].creativeDesigner + '"></td>';
	      } 
	      if (responseObject.lines[i].masterDesigner.search("<sup>") === -1) { 
	      newContent += '<td><input class="mchecked" type="checkbox" name="from"/></td><td><input type="text" class="masterDesigner" value="' + responseObject.lines[i].masterDesigner + '"></td>';
	      }
	      else {
	    	  responseObject.lines[i].masterDesigner = responseObject.lines[i].masterDesigner.replace('<sup>from</sup>', '')
	      newContent += '<td><input class="mchecked" type="checkbox" name="from" checked="checked"/></td><td><input type="text" class="masterDesigner" value="' + responseObject.lines[i].masterDesigner + '"></td>';  
	      }
	      if (responseObject.lines[i].expertDesigner.search("<sup>") === -1) {
	      newContent += '<td><input class="echecked" type="checkbox" name="from"/></td><td><input type="text" class="expertDesigner" value="' + responseObject.lines[i].expertDesigner + '"></td>';
	      }
	      else {
	      responseObject.lines[i].expertDesigner = responseObject.lines[i].expertDesigner.replace('<sup>from</sup>', '')	  
	      newContent += '<td><input class="echecked" type="checkbox" name="from" checked="checked"/></td><td><input type="text" class="expertDesigner" value="' + responseObject.lines[i].expertDesigner + '"></td>';  
	      }
	      newContent += '</tr>';
	      
	      if ((i+1) === responseObject.lines.length) {
	    	  console.log(newContent);
	    	  document.getElementById(responseObject.lines[i].service).innerHTML = newContent;
	      }
      }   //not skincare and microderm and hairremoval
      else {
    	  if (i != 0 && responseObject.lines[i].service == 'hairremoval' && responseObject.lines[i-1].service != 'hairremoval') {
    		  newContent += '<tr>';
        	  newContent += '<td></td>';
        	  newContent += '<td></td><td><b>Waxing</b></td>';
    	      newContent += '<td></td><td><b>Sugaring</b></td>';
    	      newContent += '</tr>';
    	  }  
    	  newContent += '<tr>';
    	  newContent += '<td><input type="text" class="style" value="' + responseObject.lines[i].style + '"></td>';
	      if (responseObject.lines[i].masterDesigner.search("<sup>") === -1) { 
	      newContent += '<td><input class="mchecked" type="checkbox" name="from"/></td><td><input type="text" class="masterDesigner" value="' + responseObject.lines[i].masterDesigner + '"></td>';
	      }
	      else {
	    	  responseObject.lines[i].masterDesigner = responseObject.lines[i].masterDesigner.replace('<sup>from</sup>', '')
	      newContent += '<td><input class="mchecked" type="checkbox" name="from" checked="checked"/></td><td><input type="text" class="masterDesigner" value="' + responseObject.lines[i].masterDesigner + '"></td>'; 
	      }
	      if (responseObject.lines[i].expertDesigner.search("<sup>") === -1) { 
	      newContent += '<td><input class="echecked" type="checkbox" name="from"/></td><td><input type="text" class="expertDesigner" value="' + responseObject.lines[i].expertDesigner + '"></td>';
	      }
	      else {
	    	  responseObject.lines[i].expertDesigner = responseObject.lines[i].expertDesigner.replace('<sup>from</sup>', '')
	      newContent += '<td><input class="echecked" type="checkbox" name="from" checked="checked"/></td><td><input type="text" class="expertDesigner" value="' + responseObject.lines[i].expertDesigner + '"></td>';  
	      }
    	  newContent += '</tr>';
	      if ((i+1) === responseObject.lines.length) {
	    	  newContent += '</tbody>';
	    	  console.log(newContent);
	    	 document.getElementById(responseObject.lines[i].service).innerHTML = newContent;
	      }
      }
    }
  }
};

xhr.open('GET','../data/services.json', true);        // Prepare the request
xhr.send(null); 

//Save details

$(document).ready(function () {

	$('#save').click(function() {
		
	xmlhttp = new XMLHttpRequest();
	var arr = [];
	function formtoarray(service) {
	var tablerow = $(service).find('tr');
	  tablerow.each(function() {
	   
		  var style = $(this).find('td .style').val();
		  
	      
		  var designer = $(this).find('td .designer').val();
	      if ($(this).find('td .dchecked').is(':checked')) {
		      designer = '<sup>from</sup>' + designer;
		  }
	      
	      var creativeDesigner = $(this).find('td .creativeDesigner').val();
	      if ($(this).find('td .cchecked').is(':checked')) {
		      creativeDesigner = '<sup>from</sup>' + creativeDesigner;
		      }
	      
	      var masterDesigner = $(this).find('td .masterDesigner').val();
	      if ($(this).find('td .mchecked').is(':checked')) {
		      masterDesigner = '<sup>from</sup>' + masterDesigner;
		      }
	      
	      var expertDesigner = $(this).find('td .expertDesigner').val();
	      if ($(this).find('td .echecked').is(':checked')) {
	      expertDesigner = '<sup>from</sup>' + expertDesigner;
	      }
	      
	      
	      if (style) {
	      arr.push({
	    	service: service.substring(1),
	    	style: style,
	    	designer: designer,
	    	creativeDesigner: creativeDesigner,
	    	masterDesigner: masterDesigner,
	    	expertDesigner: expertDesigner
	    })
	    }
	  })
	}
	
	function formtoarray1(service1) {
		var tablerow1 = $(service1).find('tr');
		  tablerow1.each(function() {
		   
			  var style1 = $(this).find('td .style').val();
			  
		      var masterDesigner1 = $(this).find('td .masterDesigner').val();
		      if ($(this).find('td .mchecked').is(':checked')) {
			      masterDesigner1 = '<sup>from</sup>' + masterDesigner1;
			      }
		      
		      var expertDesigner1 = $(this).find('td .expertDesigner').val();
		      if ($(this).find('td .echecked').is(':checked')) {
		      expertDesigner1 = '<sup>from</sup>' + expertDesigner1;
		      }
      
		      if (style1) {
		      arr.push({
		    	service: service1.substring(1),
		    	style: style1,
		    	masterDesigner: masterDesigner1,
		    	expertDesigner: expertDesigner1
		    })
		    }
		  })
		}  
	
	formtoarray('#haircut');
	formtoarray('#condition');
	formtoarray('#haircolor');
	formtoarray('#nailcare');
	formtoarray('#makeup');
	
	formtoarray1('#skincare');
	formtoarray1('#microderm');
	formtoarray1('#hairremoval');
	formtoarray1('#massage'); 
	
	
	var servicesJson = JSON.stringify(arr);
	servicesJson = '{"lines": ' + servicesJson + '}';
	console.log(servicesJson);
	
	xmlhttp.onreadystatechange = respond;
	xmlhttp.open("POST", "maint.php", true);
	xmlhttp.send(servicesJson);
	});
	function respond() {
		if (xmlhttp.readyState == 4
				&& xmlhttp.status == 200) {
			document.getElementById('result').innerHTML = xmlhttp.responseText;
		}
	}
	});
