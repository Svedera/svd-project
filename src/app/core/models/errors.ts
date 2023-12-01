export class NullParameterError extends Error {
    constructor(parameterName: string) {
        super(`Parameter '${parameterName}' cannot be null or undefined.`);
        this.name = 'NullParameterError';
    }
}

export class IndexOutOfBoundaries extends Error {
    constructor(index: number, length: number) {
        super(
            `Index is out of boundaries,` +
            ` index: ${index}, array length: ${length}`
        );
        this.name = 'NullParameterError';
    }
}