import { describe, expect, test } from '@jest/globals';

import { BubbleSorting } from './bubbleSorting';


const iterationCallback =
    (array: number[], indexOne: number, indexTwo: number) => {
        console.warn(array);
        console.warn(indexOne);
        console.warn(indexTwo);
        console.warn(array[indexOne] > array[indexTwo]);
    }

describe('Elements have to be swapped', () => {

    test('Should pass', () => {
        const arrayToSort = [3, 5, 7, 5];
        const sortedArray = [3, 5, 5, 7];

        const sorting = new BubbleSorting(iterationCallback);
        const result = sorting.sortArray(arrayToSort);

        expect(result).toBe(sortedArray);
    });
});
