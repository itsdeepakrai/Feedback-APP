

$(document).ready(function () { 

modify_selection();
 });
 


function modify_selection()
{
	
$.ajax({

            type: 'GET',
            url: 'https://9e3a72a4-91a3-4478-9f0e-a28b5f3b4d5b-bluemix.cloudant.com/mydatabase2/_design/queryBluemixid/_view/Bluemixacc?group=true',
			"username": "9e3a72a4-91a3-4478-9f0e-a28b5f3b4d5b-bluemix",
			"password": "a5a9537943cb7ca8ac92065bea63118356cd92c10ce0cd09ad9c70a6ff4e2591",
            success: function (result) {           
             $('#yes').html("<div />");
             $('#no').html("<div />");
				console.log(result);
				var data = JSON.parse(result);
				var available=false;
				var yes=false;
				var no=false;
				if(data  ){
					
					for(var i=0;i<data.rows.length;i++){
						available=true;
						console.log(data.rows[i].value)
						if(data.rows[i].key=="yes"){
							yes=true;
							console.log("yes "+data.rows[i].value);
							$("#yes").append("<p style='text-align:center;'><b>Yes</b> "+data.rows[i].value+"</p>")
						}
						if(data.rows[i].key=="no"){
							no=true;
							console.log("no "+data.rows[i].value);
							$("#no").append("<p style='text-align:center;'><b>No</b> "+data.rows[i].value+"</p>")
						}
					
					}
					
				}
				if(!available){
				
					$("#yes").append("<p style='text-align:center;'><b>Yes</b> 0</p>");
					
					$("#no").append("<p style='text-align:center;'><b>No</b> 0	</p>");
					
					
				
				}else{
					if(!yes){
						$("#yes").append("<p style='text-align:center;'><b>Yes</b> 0</p>");
					}
					if(!no){
						$("#no").append("<p style='text-align:center;'><b>No</b> 0</p>");
					
					}
				
				}	
				
			
					
             
            },
			error: function (status) {
			
				alert("Server Not working" );
         }
        });     

}
