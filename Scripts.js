let getUnit=document.getElementById('units');

function clearText(){
	getUnit.value=0;
	console.log('Vlear value');
}

function calculateBill(){
	//var getUnit=document.getElementById('units').value;
	
	let fixed1=30;//units fixed 1-30
	let fixed2=60;//fixed 31-60
	let fixed3=90;//fixed amount 61-90
	let fixed4=480;//fixed amount 91-180
	let fixed5=540;//>180

	let valu2=7.85;//units per unit 1-60
	let val3=10;// per unit 61-90
	let val4=27.75;//per unit 91-120
	let val5=32;//per unit 121-180
	let val6=45;//per unit 181-250
	console.log("calculate");
	
	

	if(getUnit.value<30){
		bill=(getUnit.value*valu2)+fixed1;
	}
	if(getUnit.value>30 && getUnit.value<=60){
		bill=(getUnit*valu2)+60;
	}
	if(getUnit.value>60 && getUnit.value<=90){
		bill=(60*valu2)+(getUnit.value-60)*val3+90;
	}
	if(getUnit.value>90 && getUnit.value<=120){
		bill=(60*valu2)+(30*val3)+(getUnit.value-90)*val4+fixed4;
	}
	if(getUnit.value>120 && getUnit.value<=180){
		bill=(60*valu2)+(30*val3)+(30*val4)+(getUnit.value-120)*val5+fixed4;
	}
	if(getUnit.value>180){
		bill=(60*valu2)+(30*val3)+(30*val4)+(50*val5)+(getUnit.value-180)*val6+fixed5;
	}
	
	let typeBill=document.getElementById("BillResult");
	typeBill.innerHTML="</h4>"+bill+"</h4>";
}




