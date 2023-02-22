/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var tens = ['I', 'X', 'C', 'M'];
    var fives = ['V', 'L', 'D'];
    var sol = '';
    if(num < 1 || num > 3999) return sol;
    for(var i=0; i<4; i++){
        if(num === 0) break;
        var mod = num%10;
        num = Math.floor(num/10);
        if(mod !== 0){
            switch (mod){
                case 1: 
                    sol = tens[i] + sol;
                    break;
                case 2: 
                    sol = tens[i] + tens[i] + sol;
                    break;
                case 3: 
                    sol = tens[i] + tens[i] + tens[i] + sol;
                    break;
                case 4:
                    sol = tens[i] + fives[i] + sol;
                    break;
                case 5: 
                    sol = fives[i] + sol;
                    break;
                case 6: 
                    sol = fives[i] + tens[i] + sol;
                    break;
                case 7: 
                    sol = fives[i] + tens[i] + tens[i] + sol;
                    break;
                case 8: 
                    sol = fives[i] + tens[i] + tens[i] + tens[i] + sol;
                    break;
                case 9:
                    sol = tens[i] + tens[i+1] + sol;
                default:
                    break;
            }
        }
    }
    return sol;
};