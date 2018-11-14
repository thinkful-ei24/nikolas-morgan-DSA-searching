export default function binarySearch(
	arr,
	target = 2,
	start = 0,
	end = arr.length - 1,
	count = 1
) {
	//takes an array and value
	//if our start is greater than end // return -1
	//effectively compares the middle element to the value
	//if that value is less than the middle element we keep our start
	//and then change end to be the middle element index - 1
	//if that value is greater than the middle element we make our start
	//middleIndex + 1 and end stays the same

	if (start > end) {
		return -1;
	}

	let index = Math.floor((start + end) / 2);
	if (arr[index] === target) {
		return count;
	}

	if (target < arr[index]) {
		return binarySearch(arr, target, start, index - 1, ++count);
	}
	if (target > arr[index]) {
		return binarySearch(arr, target, index + 1, end, ++count);
	}
}
