$(document).ready(function () { 

getSentiment();
 });
 
 function getSentiment(){
	 
	 
	$.ajax({

            type: 'GET',
             
            url: ' //    Url Cloudant View URL',
			"username": " //   Cloudant Username   ",
			"password": "   //Cloudant Password   ",
			 
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
									contentType: 'application/x-www-form-urlencoded',
									
									data: {
										"apikey":" //   Aplchemy API Key",
										
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