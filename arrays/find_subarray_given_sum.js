function findSubArrayWithGivenSum(arr, sum) {
    var curr_sum = 0;
    for(var i = 0, j = 0; j < arr.length; ) {

       if(curr_sum < sum) {
           curr_sum +=  arr[j];
           j++;
       }
       else {
           curr_sum -= arr[i];
           i++;
       }
       
       if(curr_sum === sum)
           return arr.slice(i, j);
    }

    return "No subarray found for given sum.";
}

// Enter test input
var arr = [1, 4, 0, 0, 3, 10, 5];
var sum = 7;

console.log(findSubArrayWithGivenSum(arr, sum));

