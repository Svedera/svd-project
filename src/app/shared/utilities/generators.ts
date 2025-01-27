export const generateRandomArray =
    (length: number, min: number = 0, max: number = 100): number[] => {
        return Array.from({ length }, () =>
            Math.floor(Math.random() * (max - min + 1)) + min);
    }
