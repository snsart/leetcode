/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sortS=s.split("").sort().join("");
    let sortT=t.split("").sort().join("");
    if(sortS==sortT){
        return true;
    }
    return false;
};