function binarySearch(array, searchTerm) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === searchTerm) {
            return mid;
        } else if (array[mid] < searchTerm) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

module.exports = binarySearch;
