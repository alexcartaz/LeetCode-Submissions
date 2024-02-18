/**
 * @param {number[]} arr
 * @return {number}
 */

var maxTurbulenceSize = function(arr) {

    if (arr.length === 1) return 1
    
    function getSign(a,b) {
        if(a>b) return '>';
        if(a<b) return '<'
        return '=';
    }

    let max = 1, currMax =1, reset = false, lastSign = getSign(arr[0], arr[1]), currSign;
    
    for(let i=0; i<arr.length-1; i++){
        
        currSign = getSign(arr[i], arr[i+1])

        if(currSign != '='){
            if(currSign === lastSign) reset = true;
            else currMax++;
        }else reset = true;
 
        if(reset === true){
            if(currMax > max) max = currMax;
            if(currSign === '=') currMax = 1
            else currMax = 2;
            reset = false;
        }
        lastSign = currSign;
    }
    return Math.max(max, currMax)
};