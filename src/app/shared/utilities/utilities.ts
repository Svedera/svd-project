import { IndexOutOfBoundaries } from '@models/errors';

export const sleep = (time_ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, time_ms));
}

export const swapArrayElements = (
    array: number[],
    firstElement: number,
    secondElement: number) => {
    const length = array.length;
    if (firstElement > array.length - 1)
        throw new IndexOutOfBoundaries(firstElement, length);
    if (secondElement > array.length)
        throw new IndexOutOfBoundaries(secondElement, length);
    
    return [array[firstElement], array[secondElement]] =
        [array[secondElement], array[firstElement]];
}