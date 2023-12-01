export type SwappingFunction<T> =
    ((newState: T[], indexOne: number, indexTwo: number) => void) | null;

export abstract class SortingService<T> {
    iterationCallback: SwappingFunction<T> = null;
    abstract sortArray: (array: T[]) => number[]
}
