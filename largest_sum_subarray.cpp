/**
* Largest Sum Contiguous Subarray
* http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
* Variant of Kadane's Algorithm
* Dynamic Programming
*/

#include <iostream>
#include <vector>
#include <cstdio>

using namespace std;

int max(int x, int y) {
	return (x>y)?x:y;
}

int main() {
	int n, i, temp;
	vector<int> arr;

	cin>>n;

	for(i=0; i<n; i++) {
		cin>>temp;
		arr.push_back(temp);
	}

	int curr_sum = arr[0];
	int max_sum = arr[0];

	for(i=1; i<n; i++) {
		curr_sum = max(curr_sum + arr[i], arr[i]);
		max_sum = max(curr_sum, max_sum);
	}

	cout<<"Maximum Sum is: "<<max_sum<<endl;

	return 0;
}
