(function($) {
    "use strict";
	
	var options2 = { success: showResponseContact, beforeSubmit: showRequestContact}; 
    $('#contact-form').submit(function() { 
        $(this).ajaxSubmit(options2); 
        return false; 
    });
	
	})(jQuery);

function showResponseContact(responseText, statusText)  { 
	if (statusText == 'success') {
		$('#contact-form-holder').html('<h4>Message sent</h4>'); 
		$('#output-contact').html('<p>' + $('someText', responseText).html()  + '</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequestContact(formData, jqForm, options2) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	
	if (!form.name.value) { 
		$('#output-contact').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email.value) {
		$('#output-contact').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		$('#output-contact').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.subject.value) {
		$('#output-contact').html('<div class="output2">Please fill the Subject field!</div>'); 
		return false; 
	}
	else if (!form.message.value) {
		$('#output-contact').html('<div class="output2">Please fill the Message field!</div>'); 
		return false; 
	}
	 else {	   
	 $('#output-contact').html('Sending message...!');  		
		return true;
	}
}