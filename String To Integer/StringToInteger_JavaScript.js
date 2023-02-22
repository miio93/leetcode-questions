/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    var neg = false;
    if(s[0] === '-'){
        neg = true; 
        s = s.substring(1);
    } else
    if(s[0] === '+'){
        s = s.substring(1);
    }
    var digits = /[0-9]/;
    for(var i=0; i<s.length; i++){
        if(!digits.test(s[i])){
            s = s.substring(0,i);
            break;
        }
    }
    if(s.length === 0){
        return 0;
    }
    s = parseInt(s);
    if(neg) s = -1*s;

    if(s < -1*Math.pow(2,31)) s = -1*Math.pow(2,31); 
    if(s > Math.pow(2,31)-1) s = Math.pow(2,31)-1;

    return s;
};