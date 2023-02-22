/**
 * @param {string[]} strs
 * @return {string}
*/

var longestCommonPrefix = function(strs) {
    var pref = '';
    var letter = '';
    var index = 0;

    // Max number of letters
    var n = 200;

    if(strs.length === 0) return pref;

    while(index < n){
        for(var i = 0; i < strs.length; i++){
            var c = strs[i][index];
            if(c === undefined){
                return pref;
            }
            if(letter === ''){
                letter = strs[i][index];
            }
            if(c !== letter){
                return pref;
            }
        }
        pref += letter;
        letter = '';
        index++;
    }

    return pref;
};