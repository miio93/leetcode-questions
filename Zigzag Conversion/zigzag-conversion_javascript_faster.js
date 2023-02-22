/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // Base case of 1 row, or 1 character
    if(s.length <= 2 || numRows == 1) return s;

    // Solution to be returned
    var solution = '';

    // Loop through string and add to solution string
    // We will add to string letter by letter, skipping as many letters as required
    var skip_n = 2*(numRows-1);
    for(var i=0; i<numRows; i++){
        // Starting letter
        var j = i;

        while(true){
            // Starting and ending row have no letters in between.
            // Other rows have letters in between. Add these ones as required
            if(i != 0 && i != numRows-1){
                if(s[j-(2*i)] !== undefined){
                    solution += s[j-(2*i)];
                }
            }

            if(s[j] === undefined){
                break;
            }
            solution += s[j];
            j += skip_n;
        }
    }

    // Return solution
    return solution;
};