var SummaryRanges = function() {
    this.intervals = [];
    return null;
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
    if(!this.intervals.includes(value)){
        this.intervals.push(value);
        this.intervals.sort(function(x,y){ return x-y;});
    }
    return null;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    var res = [];
    var min = -1;
    var max = -1;
    for(var i=0; i<this.intervals.length; i++){
        if(min == -1){
            min = this.intervals[i];
            max = this.intervals[i];
        }
        else{
            if(this.intervals[i] === max+1){
                max = this.intervals[i];
            }
            else{
                res.push([min,max]);
                min = this.intervals[i];
                max = this.intervals[i];
            }
        }
        if(i === this.intervals.length-1){
            res.push([min,max]);
        }
    }
    return res;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */