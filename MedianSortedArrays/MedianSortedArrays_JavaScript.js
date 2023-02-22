/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Total length of sorted arrays merged
    var n = nums1.length + nums2.length;
    
    // Location of median to be returned
    var median = Math.ceil(n/2);
    var even = n%2 == 0 ? true : false;

    // Result to be returned
    var result = 0;

    // Pointers of arrays
    var p1 = 0;
    var p2 = 0;

    // Length of arrays
    var n1 = nums1.length;
    var n2 = nums2.length;

    // Loop arrays, compare values, return result only when median is found
    for(var i=0 ; i<=median; i++){
        // No more values in nums1
        if(p1 >= n1){
            // Hit median
            if(i >= (median-1)){
                result += nums2[p2];
                p2 += 1;
                if(!even) break;
            }
            // Not median yet, increase pointer 2
            else{
                p2 += 1;
            }
            continue;
        }

        // No more values in nums2
        if(p2 >= n2){
            // Hit median
            if(i >= (median-1)){
                result += nums1[p1];
                p1 += 1;
                if(!even) break;
            }
            // Not median yet, increase pointer 1
            else{
                p1+= 1;
            }
            continue;
        }

        // nums1 and nums2 still have values in them
        var val1 = nums1[p1];
        var val2 = nums2[p2];

        // Compare values, return median if found, or increase pointer if no median found yet
        if(i < (median-1)){
            if(val1 <= val2){
                p1 += 1;
            }
            else{
                p2 += 1;
            }
            continue;
        }
        else{
            if(even){
                if(val1 <= val2){
                    result += nums1[p1];
                    p1 += 1;
                }
                else{
                    result += nums2[p2];
                    p2 += 1;
                }
                continue;
            }
            else{
                if(val1 <= val2){
                    result = nums1[p1];
                }
                else{
                    result = nums2[p2];
                }
                break;
            }
        }
    }

    if(even){
        result = result/2;
    }

    return result;
};