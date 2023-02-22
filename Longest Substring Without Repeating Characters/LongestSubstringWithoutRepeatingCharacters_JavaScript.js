/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    // If it's an empty string, we will return 0 by default
    if(s == '') return 0;

    // Return the highest unique substring, keep track of it
    var highest = 0;

    // Save previously visited hashmap
    var hm = [];

    // Current maximum count
    var cur_max = 0;

    // Save previous character for comparison
    var prev_c = '';

    for(var i = 0; i < s.length; i++){
        // Current character
        var c = s[i];

        // Compare identical characters next to each other
        if(prev_c == c){
            cur_max = 1;
            hm = [];
            hm[c] = i;
            continue;
        }

        // In hashmap? y: compare with older index and get longest substring, n: add to hashmap
        if(hm[c] === undefined){
            // Increase current maximum and add to hashmap
            cur_max += 1;
            // Save index in hashmap
            hm[c] = i;
        }
        else{
            // Check if next character is new or repeated as well
            // If last character in string, break
            if(i == s.length-1){
                break;
            }

            // Compare the current maximum with the current visible highest 
            if(cur_max > highest){
                highest = cur_max;
            }

            // Compare index of found character against previous index found
            // Update current max based on said index
            var i_old = hm[c];
            cur_max = i-i_old;

            // Update hash map with new i
            hm[c] = i;

            // Delete from hash map any characters with index lower than older index
            Object.keys(hm).forEach(function (key) {
                if(hm[key] < i_old){
                    delete hm[key];
                }
            });
        }
        
        // Save previous character
        prev_c = c;
        // Update highest as we move along the string
        if(cur_max > highest)
            highest = cur_max;
    }

    // Return highest
    return highest;
};