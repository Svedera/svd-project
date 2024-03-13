export class CanvasNotInitializedError extends Error {
    constructor() {
        super(`Canvas was not initialized.`);
        this.name = 'CanvasNotInitializedError';
    }
}