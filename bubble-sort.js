function bubbleSort(array) {
    const n = array.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                // Swap array[i] and array[i + 1]
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                swapped = true; // Mark that a swap occurred
            }
        }
    } while (swapped);

    
    return array;
}

module.exports = bubbleSort;
