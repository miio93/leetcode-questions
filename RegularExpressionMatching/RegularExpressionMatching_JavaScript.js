/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var reg = new RegExp(p);
    var remain = s.replace(reg, '');
    if(remain.length == 0) return true; else return false;
};