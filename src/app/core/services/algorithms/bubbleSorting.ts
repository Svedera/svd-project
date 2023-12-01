import {
    SortingService,
    SwappingFunction
} from '@services/abstract/sortingService';
import { swapArrayElements } from '@shared/utilities/utilities';


export class BubbleSorting implements SortingService<number>{
    iterationCallback: SwappingFunction<number> = null;

    constructor(iteration: SwappingFunction<number> = null) {
        this.iterationCallback = iteration;
    }

    sortArray = (array: number[], ascending: boolean = true): number[] => {
        let sorted = true;
        while (!sorted) {
            for (var i = 0; i < array.length - 2; i++) {
                const leftElement = array[i];
                const rightElement = array[i + 1]
                if (leftElement < rightElement && ascending
                    || leftElement > rightElement && !ascending)
                    sorted = false;
                array =
                    swapArrayElements(array, i, i + 1);
            }
        }
        return array;
    };

}