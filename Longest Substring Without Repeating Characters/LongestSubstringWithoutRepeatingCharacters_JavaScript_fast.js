/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var longest_string = '';
    var current_string = '';

    for(var i=0; i<s.length; i++){
        var c = s[i];
        var ind = current_string.indexOf(c);
        if(current_string.indexOf(c) >= 0){
            // Letter found in current string
            current_string = current_string.substring(ind, i);
        }
        else{
            // No letter found, add to current string
            current_string += c;
        }

        if(current_string.length > longest_string.length){
            longest_string = current_string;
        }
    }

    if(current_string.length > longest_string.length){
        longest_string = current_string;
    }
    return longest_string.length;
};