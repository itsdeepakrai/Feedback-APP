$(document).ready(function () { 

getSentiment();
 });
 
 function getSentiment(){
	 
	 
	$.ajax({

            type: 'GET',
             
            url: 'https://9e3a72a4-91a3-4478-9f0e-a28b5f3b4d5b-bluemix.cloudant.com/myfeedback/_design/QueryComments/_view/Additional%20comments?limit=20&reduce=false',
			username: "9e3a72a4-91a3-4478-9f0e-a28b5f3b4d5b-bluemix",
			password: "a5a9537943cb7ca8ac92065bea63118356cd92c10ce0cd09ad9c70a6ff4e2591",
			 
            success: function (result) {           
            	var data = JSON.parse(result);
				var available=false;
				var yes=false;
				var no=false;
				if(data  ){
					var j=0;
					for(var i=0;i<data.rows.length;i++){
						
						console.log(data.rows[i].id);
				
						var name=data.rows[i].id;
						var test=data.rows[i].key;
						if(test=="")
							test="neutral";
								$.ajax({

									type: 'POST',
									url: 'http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment',
									apikey:'6081592d26456671b8f3e70256ae0c66ee5c58db',
									contentType: 'application/x-www-form-urlencoded',
									text:"hi there",
									
									data: {
										"apikey":"6081592d26456671b8f3e70256ae0c66ee5c58db",
										
										"text":test,
										"outputMode":"json"
										
								},
									success: function (result) {     
										console.log(result.docSentiment);
											
											$("#tableSenti").append("<tr ><td >"+data.rows[j].id+"</td><td >"+ result.docSentiment.type+"</td></tr>");
											j++;
										
									},
									error: function (status) {
									
										console.log(status);
								 }
								});     
						
						
						
						
						
						
						
					
					}
					
				}
					
					
             
            },
			error: function (status) {
				ActivityIndicator.hide();
				console.log(status);
         }
        });     


	 
	 
	 
 }