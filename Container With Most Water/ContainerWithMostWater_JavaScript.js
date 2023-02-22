/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i = 0;
    var j = height.length-1;
    var area = 0;
    do{
        var cur = (Math.min(height[i],height[j])) * (j-i);
        if(cur > area) area = cur;
        if(height[i] < height[j]){
            i++;
        }
        else{
            j--;
        }
    } while(i !== j);
    return area;
};