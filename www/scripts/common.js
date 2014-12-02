/*
This function pulls the Unique iPad ID to use as your file name.
If a Unique iPad ID is not set, saving data will not work.
*/
function getFilenameID() {
    var iPadID = "";
    try {
        iPadID = kioskpro_id.toString().split(" ").join("");
    }
    catch(e)
    {
        alert('Unique iPad ID not entered in Kiosk Pro settings. Please enter a value before attempting to save data locally as this is used in this example as part of the filename. Without the ID set, the app will be unable to save multiple entries.');
        return "";
    }
    return iPadID;
}

/*
This function saves the data entered by your visitors to a .csv file using the name attribute.
To add more inputs to save, add:
	'+document.getElementsByName('NAME')[0].value+'
and replace NAME with the name attribute for the HTML input.
*/
function saveCSV(){
	var error = false;
	 
	document.getElementsByName('error')[0].innerHTML="";
	 
	
	
	if (document.getElementsByName('firstname')[0].value.length<1) {
			document.getElementsByName('firstname')[0].style="border:solid 4px red";
			error=true;
	} else {
			document.getElementsByName('firstname')[0].style="border:none;";
	}
	if (document.getElementsByName('lastname')[0].value.length<1) {
			document.getElementsByName('lastname')[0].style="border:solid 4px red";
			error=true;
	} else {
			document.getElementsByName('lastname')[0].style="border:none;";
	}
	if (document.getElementsByName('email')[0].value.length<1) {
			document.getElementsByName('email')[0].style="border:solid 4px red";
			error=true;
	} else {
			document.getElementsByName('email')[0].style="border:none;";
	}
	if (document.getElementsByName('company')[0].value.length<1) {
			document.getElementsByName('company')[0].style="border:solid 4px red";
			error=true;
	} else {
			document.getElementsByName('company')[0].style="border:none;";
	}
	
	if (document.getElementsByName('phone')[0].value.length<1) {
			document.getElementsByName('phone')[0].style="border:solid 4px red";
			error=true;
	} else {
			document.getElementsByName('phone')[0].style="border:none;";
	}
	if (error==true) {
		document.getElementsByName('error')[0].innerHTML="Please enter all required fields.";
		return;	
	}
	thankYou();
	//writeToFile(getFilenameID()+'.csv', new Date()+','+document.getElementsByName('firstname')[0].value+','+document.getElementsByName('lastname')[0].value+','+document.getElementsByName('email')[0].value+','+document.getElementsByName('company')[0].value+','+document.getElementsByName('dealercode')[0].value+','+document.getElementsByName('phone')[0].value+','+document.getElementsByName('SalesRep')[0].value, "thankYou");
		
}

/* This function directs to the thanks.html page when a form is submitted. */
function thankYou(){
	
	var skioskpro_id = ""
	try {
        skioskpro_id = kioskpro_id.toString();
    }
    catch(e)
    {
		skioskpro_id = "test";
	}
	
	

	
	window.location=encodeURI("thanks.html?kioskid=" + skioskpro_id + "&firstname="+document.getElementsByName('firstname')[0].value+'&lastname='+document.getElementsByName('lastname')[0].value+'&email='+document.getElementsByName('email')[0].value+'&dealercode='+document.getElementsByName('dealercode')[0].value+'&phone='+document.getElementsByName('phone')[0].value+'&company='+document.getElementsByName('company')[0].value+'&SalesRep='+document.getElementsByName('SalesRep')[0].value).replace("@","%40");	
}

/* This function clears the form. */
function startOver(){ 
	window.location.reload();
}
