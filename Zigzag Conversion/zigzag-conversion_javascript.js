/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // Get length of string
    var n = s.length;

    // Base case of 0 or 1 characters or 1 row
    if(n <= 1 || numRows == 1) return s;
    
    // Create dynamic array of strings that will contain the strings for every row
    var a = [];
    for(var i=0; i<numRows; i++){
        a[i] = '';
    }

    // While the string is defined, navigate through the string. 
    // - Using a counter, check in which row the string should be added dynamically
    var currentRow = 0;
    var increase = true;
    for(var i=0; i<n; i++){
        // Add character to array
        a[currentRow] += s[i];

        // Change current row. If it's 0, increase, if it's nrow - 1, decrease
        if(increase){
            if(currentRow == numRows-1){
                currentRow -= 1;
                increase = false;
            }
            else{
                currentRow += 1;
            }
        }
        else{
            if(currentRow == 0){
                currentRow += 1;
                increase = true;
            }
            else{
                currentRow -= 1;
            }
        }
    }

    // Merge the array of strings for a final string
    var solution = a.join('');

    // Return solution
    return solution;
};