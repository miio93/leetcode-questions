/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var s = Math.abs(x).toString();
    s = s.split('').reverse().join('');
    if(x < 0) s = '-' + s;
    res = parseInt(s);
    if(res < (-1*Math.pow(2,31)) || res > (Math.pow(2,31)-1)) res = 0;
    return res;
};