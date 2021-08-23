
  <script>
	//https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body	//
	//https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body//
	function myFunction() 
	{
	var theHead = document.head;
	console.log(theHead.id); // "my-document-head";
	console.log( theHead === document.querySelector("head") ); // true
	//alert(theHead.id);
	//alert("skip")
	var wantedname = (theHead.id);
	alert(wantedname);
	document.getElementById("mywantedname").innerHTML = wantedname;
	var x = document.title;
	alert(x);
	document.getElementById("myx").innerHTML = x
	console.log(x); 
	}
	 </script>











