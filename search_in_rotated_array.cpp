/**
*	Find a element in a sorted array which is rotated about a pivot point
*	http://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
* 	http://ideone.com/vBXBjN
*	@lang C++
*/

#include <iostream>
#include <vector>
using namespace std;

int findPivot(vector<int> a, int low, int high) {
	if(high<low)
		return -1;
	
	if(low == high) 
		return low;
	
	int mid = (low+high)/2;
	if(mid<high && a[mid]>a[mid+1])
		return mid;
	
	if(mid>low && a[mid]<a[mid-1])
		return mid-1;
	
	if(a[low]>=a[mid])
		return findPivot(a, low, mid-1);
	return findPivot(a, mid+1, high);
		
}

int binarySearch(vector<int> a, int key, int low, int high) {
	if(low>high)
		return -1;
	
	int mid = (low+high)/2;
	if(a[mid] == key) 
		return mid;
	if(key<a[mid])
		return binarySearch(a, key, low, mid-1);
	else
		return binarySearch(a, key, mid+1, high);
}


int main() {
	int n, key, i, temp;
	vector<int> arr;
	cin>>n;
	cin>>key;
	
	for(i=0; i<n; i++) {
		cin>>temp;
		arr.push_back(temp);
	}
	
	// Find the pivot point
	int pivot_index = findPivot(arr, 0, n-1);
	
	// Call binary search
	if(pivot_index == -1)
		temp = binarySearch(arr, key, 0, n-1);
	else if(arr[pivot_index] == key)
		temp = pivot_index;
	else if(arr[0] <= key)
		temp = binarySearch(arr, key, 0, pivot_index-1);
	else
		temp = binarySearch(arr, key, pivot_index+1, n-1);
	
	
	if(temp != -1)
		cout<<"Element Found at index: "<<temp<<endl;
	else
		cout<<"Element does not exists"<<endl;
	
	return 0;
}