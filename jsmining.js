function initui(){	
document.getElementById('startmining').onclick = function () {
					     var targetv=50;var targetlen=4;
					     var text=document.getElementById('input').value;
					     var targetinput=document.getElementById('target').value;
					   if(!isNaN(targetinput))
					       targetv=targetinput;
					    else document.getElementById('target').value=targetv;
					
					  var targetleninput=document.getElementById('targetlen').value;
					   if(!isNaN(targetleninput))
					       targetlen=targetleninput;
					    else document.getElementById('targetlen').value=targetlen;
					
				     document.getElementById('output').value = minnig(text,targetv,targetlen);
	                
					
				};
	
}



var minnig = function minnig(ascii,targetv,targetlen) {
	
	var i=0;
	var mininghash=" ...  ";
	
	  var timer = window.setInterval(function(){
            
		  var lo=0;
		  while (lo<99){
			  i++
	          lo++;
	          var nextval=ascii+i;
	          mininghash=sha256(nextval);
			  var res = mininghash.substring(0, targetlen);
			  varint=Base64.toNumber(res);
			  if(varint<targetv){ 
				    document.getElementById('dataput').value=nextval;
				    window.clearInterval( timer );
				   break;
				  
				}
		    }
		   lo=0;
	       document.getElementById('output').value=mininghash+" : Nonce ="+i;
		  
           }, 100);
	
	return mininghash;
};


Base64 = {

    _Rixits :"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/",
    fromNumber : function(number) {
        if (isNaN(Number(number)) || number === null ||
            number === Number.POSITIVE_INFINITY)
            throw "The input is not valid";
        if (number < 0)
            throw "Can't represent negative numbers now";

        var rixit; 
        var residual = Math.floor(number);
        var result = '';
        while (true) {
            rixit = residual % 64
            result = this._Rixits.charAt(rixit) + result;
            residual = Math.floor(residual / 64);

            if (residual == 0)
                break;
            }
        return result;
    },

    toNumber : function(rixits) {
        var result = 0;
        rixits = rixits.split('');
        for (var e = 0; e < rixits.length; e++) {
            result = (result * 64) + this._Rixits.indexOf(rixits[e]);
        }
        return result;
    }
}
