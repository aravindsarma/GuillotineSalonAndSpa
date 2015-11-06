xhr = new XMLHttpRequest(); 
	
xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '<tr>';
    newContent += '<td></td>';
    newContent += '<td>&nbsp;&nbsp; designer</td>';
    newContent += '<td>creative designer</td>';
    newContent += '<td>master designer</td>';
    newContent += '<td>expert designer</td>';
    newContent += '</tr>';
    for (var i = 0; i < responseObject.lines.length; i++) { // Loop through object
      if((i != 0) && (responseObject.lines[i-1].service != responseObject.lines[i].service)) {
    	  document.getElementById(responseObject.lines[i-1].service).innerHTML = newContent;
    	  newContent = ' ';
      }
      
      if (responseObject.lines[i].service != 'skincare' && responseObject.lines[i].service != 'microderm' &&
    	  responseObject.lines[i].service != 'hairremoval' && responseObject.lines[i].service != 'massage') { 
	      newContent += '<tr>';
	      newContent += '<td>' + responseObject.lines[i].style + '</td>';
	      newContent += '<td>' + responseObject.lines[i].designer + '</td>';
	      newContent += '<td>' + responseObject.lines[i].creativeDesigner + '</td>';
	      newContent += '<td>' + responseObject.lines[i].masterDesigner + '</td>';
	      newContent += '<td>' + responseObject.lines[i].expertDesigner + '</td>';
	      newContent += '</tr>';
	      if ((i+1) === responseObject.lines.length) {
	    	  document.getElementById(responseObject.lines[i].service).innerHTML = newContent;
	      }
      }   //not skincare and microderm and hairremoval
      else {
    	  
    	  if (responseObject.lines[i].service == 'hairremoval' && responseObject.lines[i-1].service != 'hairremoval' && i != 0) {
    		  newContent += '<tr>';
        	  newContent += '<td></td>';
        	  newContent += '<td>Waxing</td>';
    	      newContent += '<td>Sugaring</td>';
    	      newContent += '</tr>';
    	  }  
    	  newContent += '<tr>';
    	  newContent += '<td>' + responseObject.lines[i].style + '</td>';
    	  newContent += '<td>' + responseObject.lines[i].masterDesigner + '</td>';
	      newContent += '<td>' + responseObject.lines[i].expertDesigner + '</td>';
	      newContent += '</tr>';
	      if ((i+1) === responseObject.lines.length) {
	    	  document.getElementById(responseObject.lines[i].service).innerHTML = newContent;
	      }
      }
    }
  }
};

xhr.open('GET','data/services.json', true);        // Prepare the request
xhr.send(null); 
