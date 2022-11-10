export class Queue<T> {
  private items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  getItems() {
    return this.items
  }
}

export class LimitedQueue<T> {
  private length: number;
  private items: T[];
  private currentIndex: number;

  constructor(
    length: number,
    items: T[] = []) {

    this.length = length;
    this.items = items;
    this.currentIndex = items.length - 1;
  }

  enqueue(item: T) {
    if (this.items.length >= this.length) {
      this.dequeue();
    }
    this.items.push(item);
  }

  getCurrent(): T {
    return this.items[this.currentIndex]
  }

  previous(): T | null {
    if (this.currentIndex >= (this.length - 1)) {
      return null;
    }

    this.decreaseIndex();
    return this.getCurrent();
  }

  next(): T | null {
    if (this.currentIndex >= (this.length - 1)) {
      return null;
    }

    this.decreaseIndex();
    return this.getCurrent();
  }


  private dequeue() {
    return this.items.shift();
  }

  private increaseIndex() {
    if (this.currentIndex >= this.length) {
      this.currentIndex = 0;
      return;
    }

    this.currentIndex--;
  }

  private decreaseIndex() {
    if (this.currentIndex <= 0) {
      this.currentIndex = 0;
      return;
    }

    this.currentIndex--;
  }
}
