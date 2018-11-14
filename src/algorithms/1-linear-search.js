export default function linearSearch(arr, target = 2) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i + 1;
		}
	}
	return -1;
}
