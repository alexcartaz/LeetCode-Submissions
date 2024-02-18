/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

var kClosest = function(points, k) {    
    
    let unordered = [];
    let ans = [];
    let distance, obj;
    let index = 0;
    
    points.map( ([x,y]) => {
        distance = Math.sqrt(x**2 + y**2);
        obj = {
            'dist': distance,
            'pair': [x,y]
        }
        unordered.push(obj);
        index++;
    });

    const ordered = unordered.sort((a, b) => {
        return a.dist - b.dist;
    });

    ordered.length = k;

    ordered.map( obj => {
        ans.push(obj.pair)
    });

    return ans;
};


