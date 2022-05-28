/*
	WEB  Assignment 1 - jQuery
	{Ajima Master}
*/

//create an event handler to run whenever price value has changed

$('document').ready(function(){
    $('#price').onkeyup(function(){
        calculateTax();
    });
	//click event for adding price in the list
    $("#add-price").on('click',function(){
		let price=$('#price').val();
        $('#price-list').append('<li>'+price+'</li>');
		calculateTax();
		return false;	
		
    });
    calculateTax();
});

//calculate tax
function calculateTax(){
    //get value of price
		let price=parseFloat($('#price').val());
		$('#price-list').append(price);
		let tax=price*0.13;
        let totalTax=price+tax;
		//add price+tax as list item to button
        $('this').find('#tax').append('<li>'+totalTax+'</li>').val();
        let subTotal=totalTax.toFixed(2);
        $("#tax").apend('',+totalTax);
        $("ul#price-list").append(('',+subTotal-tax).toFixed(2));
        	
}

    
     
	

		

	//add event handler to button
	
		

	
	//calculate tax that wouldbe add to price 
	
	
		//get value of price
		
	
		

	
		
	
	//window.onload=function(){
		//$('#calculate').onclick=processEntries();
	//

	/*
	$("form").on('keyup','#price',function(){
		const price=parseFloat($('#price').val());
		const tax=parseFloat($('#tax').val());
		let taxCal=(price*tax)/100;
		function processEntries(){}
		$('#add-price').html(taxCal.toFixed(2));
		$('#tax').html((price-taxCal).toFixed(2));
	});
*/