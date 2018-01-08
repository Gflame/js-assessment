arraysAnswers = {
    /**
     * Find the 0 based index of item in arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @param {Number} item - A number to find in arr
     * @returns {Number} The index of item in arr, or -1 if item is not in arr.
     */
    indexOf: function indexOf(arr, item) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
        // Implement a function, that returns the 0 based index of an element in an array.
    },

    /**
     * Determine the sum of the items of arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @returns {Number} The numerical sum of all items in arr.
     */
    sum: function sum(arr) {
        let i,
            arrLength = arr.length,
            sumTotal = 0;
        for (i = 0; i < arr.length; i += 1) {
            sumTotal += arr[i];
        }
        return sumTotal;
    },

    /**
     * Create a new array with the same items as arr, excluding item
     *
     * @param {Number[]} arr - An array of numbers
     * @param {Number} item - A number to be excluded from the new array
     * @returns {Number[]} A new array containing all numbers from arr except item.
     */
    remove: function remove(arr, item) {
        var ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] !== item) {
                ret.push(arr[i]);
            }
        }

        return ret;
    },

    removeWithoutCopy : function (arr, item) {
        var i, len;
        for (i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i = i - 1;
                len = len - 1;
            }
        }

        return arr;
    },

    /**
     * Adds a number, item, to the end of an array, arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @param {Number} item - A number to be appended to the end of arr
     * @returns {Number[]} The array arr, with item appended.
     */
    append: function append(arr, item) {
        arr.push(item);
        return arr;
    },

    /**
     * Removes a number, item, from the end of an array, arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @returns {Number[]} The array arr, with the last element removed..
     */
    truncate: function truncate(arr) {
        arr.pop();
        return arr;
    },

    /**
     * Adds a number, item, to the beginning of an array arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @param {Number} item - A number to append to the beginning of arr.
     * @returns {Number[]} The array arr, with the first element item added
     */
    prepend: function prepend(arr, item) {
        arr.unshift(item);
        return arr;
    },


    /**
     * Removes the first element from an array
     *
     * @param {Number[]} arr - An array of numbers
     * @returns {Number[]} The array arr, with the first element item removed.
     */
    curtail: function curtail(arr) {
        arr.shift();
        return arr;
    },

    /**
     * Combines the two arrays arr1 and arr2 together
     *
     * @param {Number[]} arr1 - An array of numbers
     * @param {Number[]} arr2 - An array of numbers
     * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
     */
    concat: function concat(arr1, arr2) {
        return arr1.concat(arr2);
    },

    /**
     * Insert a number item into an array arr at the 0 based position index.
     *
     * @param {Number[]} arr - An array of numbers
     * @param {Number} item - A number to be inerted into arr
     * @param {Number} index - A 0 based index into the array arr.
     * @returns {Number[]} The array arr, with the number item inserted at position index.
     */
    insert: function insert(arr, item, index) {
        var i,
            arrLength = arr.length;

        for (i = 0; i < arrLength; i += 1) {
            if (i === index) {
                arr.splice(i, 0, item);
                arrLength += arrLength;
            }
        }
        return arr;
    },

    /**
     * Counts the number of times a number item appears in an array arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @param {Number} item - A number to count in arr
     * @returns {Number} The count of the number of times the number item appeared in arr.
     */
    count: function count(arr, item) {
        var i,
            count = 0,
            arrLength = arr.length;

        for (i = 0; i < arrLength; i += 1) {
            if (arr[i] === item) {
                count += 1;
            }
        }
        return count;
    },

    /**
     * Determines the number of duplicated numbers in the array arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @returns {Number[]} An array of numbers that appear in arr more than once.
     */
    duplicates: function duplicates(arr) {
        let i,
            counts = [],
            duplicates = [],
            arrLength = arr.length,
            countsLength;

        for (i = 0; i < arrLength; i += 1) {
            if (counts[arr[i]] === undefined) {
                counts[arr[i]] = 1;
            } else {
                counts[arr[i]] += 1;
            }
        }

        countsLength = counts.length;
        for (i = 0; i < countsLength; i += 1) {
            if (counts[i] > 1) {
                duplicates.push(i);
            }
        }
        return duplicates;
    },

    /**
     * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
     *
     * @param {Number[]} arr - An array of numbers
     * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
     */
    square: function square(arr) {
        let i,
            arrLength = arr.length;

        for (i = 0; i < arrLength; i += 1) {
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    },

    /**
     * Finds the indices of the occurrences of a number target in an array of numbers arr.
     *
     * @param {Number[]} arr - An array of numbers
     * @param {Number} target - A number to find all occurences of.
     * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
     */
    findAllOccurrences: function findAllOccurrences(arr, target) {
        let i,
            counts = [],
            duplicates = [],
            arrLength = arr.length,
            countsLength;

        for (i = 0; i < arrLength; i += 1) {
            if (arr[i] === target) {
                duplicates.push(i);
            }
        }

        return duplicates;
    },
};
