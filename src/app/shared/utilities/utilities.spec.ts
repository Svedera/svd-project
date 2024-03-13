import { describe, expect, test } from '@jest/globals';

import { swapArrayElements } from './utilities';
import { IndexOutOfBoundaries } from '@models/errors';

describe('Elements have to be swapped', () => {

    test('Should throw array out of boundaries', () => {
        const array = [1, 3, 4, 5];
        const swappingCall = () => {
            swapArrayElements(array, 0, array.length + 10);
        };
        expect(swappingCall)
            .toThrow(IndexOutOfBoundaries);;
    });

    test('Should pass', () => {
        const array = [1, 3, 4, 5];
        const firstElement = array[0];
        const secondElement = array[1];
        const swappedArray =
            swapArrayElements(array, 0, 1);
        expect(swappedArray[0]).toBe(secondElement);
        expect(swappedArray[1]).toBe(firstElement);
    });
});
