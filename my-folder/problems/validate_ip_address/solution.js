/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    
    let ans = 'Neither', arr = [], valid = true;

    //if eval for IPv4
    if(queryIP.indexOf('.') != -1){
        arr = queryIP.split('.');
        if (arr.length != 4) return ans
        //note: can't return from within .map to end loop instantly, so have to use a flag
        //could use break/return if for/while loop
        arr.map( s => {
            if( s.length === 0) valid = false
            if( !/^[0-9]*$/.test(s) ) valid = false
            if( Number(s) > 255 || Number(s) < 0 ) {
                valid = false
            }
            if( s.length > 1 && s[0] === '0' ) valid = false
        });
        valid ? ans = 'IPv4' : '' ;
    //if eval for IPv6
    }else if (queryIP.indexOf(':') !=-1 ){
        arr = queryIP.split(':');
        if (arr.length != 8) return ans;
        //note: can't return from within .map to end loop instantly, so have to use a flag
        //could use break/return if for/while loop
        arr.map( s => {
            if (s.length > 4 || s.length < 1) valid = false
            if(!/^[a-fA-F0-9]*$/.test(s)){
                valid = false
            }
        })
        valid ? ans = 'IPv6' : '' ;
    }

    return ans;
};