
 function sale(){
    var younus= Number(document.getElementById("younus").value);
    var iqbal= Number(document.getElementById("iqbal").value);
    var yahya=Number(document.getElementById("yahya").value);
    var rameez=Number(document.getElementById("rameez").value);
    var owaise=Number(document.getElementById("owaise").value);
     
    var totalsale=younus+iqbal+yahya+rameez+owaise;
    document.getElementById("totalsale").innerHTML=totalsale;
    document.getElementById("totalsale2").value=totalsale;
    }

 function cash(){
    var safe= Number(document.getElementById("safe").value);
    var fivet= Number(document.getElementById("fivet").value);
    var onet=Number(document.getElementById("onet").value);
    var fiveh=Number(document.getElementById("fiveh").value);
    var oneh=Number(document.getElementById("oneh").value);
    var fifty=Number(document.getElementById("fifty").value);
    var mix=Number(document.getElementById("mix").value);
    
    var totalcash=safe+fivet+onet+fiveh+oneh+fifty+mix;
    document.getElementById("totalcash").innerHTML=totalcash;
    document.getElementById("totalcash2").value=totalcash;
    }

function calculate(){
    var cash= Number(document.getElementById("totalcash2").value);
    var sale= Number(document.getElementById("totalsale2").value);
    var income=Number(document.getElementById("income").value);
    var expence=Number(document.getElementById("expence").value);

    var totalreceive=income+sale;
    var totalpayment=cash+expence;
    
    document.getElementById("receipt").innerHTML=totalreceive;
    document.getElementById("payment").innerHTML=totalpayment;
    
    if(totalreceive==totalpayment){
        
        document.getElementById("short").innerHTML="Congratulations";
          document.getElementById("extra").innerHTML="";

    }
    if(totalreceive>totalpayment){
        var extra=totalreceive-totalpayment;
        document.getElementById("short").innerHTML="Rs."+extra+" is Short";
        document.getElementById("extra").innerHTML="";	
    }
    if(totalpayment>totalreceive){
        var short=totalpayment-totalreceive;
        document.getElementById("extra").innerHTML="Rs."+short+" is Excess";
       document.getElementById("short").innerHTML="";
    }


    }


