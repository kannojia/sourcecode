
function minJumpsToReachEnd(arr) {
    if(arr[0] === 0)
        return "Not Reachable";
    
    var steps = new Array(arr.length);

    steps[0] = 0;

    for(var i = 1; i < arr.length; i++) {
        for(var j = 0; j<i; j++){
            if(arr[j] + j >= i && steps[j] && (!steps[i] || steps[j] + 1 < steps[i])) {
                steps[i] = steps[j] + 1;
            }
        }
    }

    return steps[i-1];
}


// Call function with input

var arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log(minJumpsToReachEnd(arr));

