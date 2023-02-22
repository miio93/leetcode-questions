 /**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    // String length
    var n = s.length;

    // String to be returned (longest palyndrome substring)
    var longest = '';

    for(var i=0; i<n; i++){
        var temp = s[i];
        var c = s[i];
        var countRight = i+1;
        var countLeft = i-1;
        while(countRight < n && s[countRight] == c){
            temp += c;
            countRight++;
        }
        while(countLeft >= 0 && s[countLeft] == c){
            temp += c;
            countLeft--;
        }
        while(countLeft >= 0 && countRight < n){
            if(s[countLeft] !== s[countRight]){
                break;
            } 
            temp = s[countLeft] + temp + s[countRight];
            countLeft--;
            countRight++;
        }
        if(temp.length > longest.length){
            longest = temp;
        }
        if(longest.length == n){
            return longest;
        }
    }

    // Returned value (longest substring)
    return longest;
};