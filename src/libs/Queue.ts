/**
 * Queue.ts
 */
export default class Queue<T> {
  public size: number;
  private _queue: T[];

  constructor() {
    this._queue = [];
    this.size = 0;
  }

  public push(v: T): void {
    this._queue.push(v);
    ++this.size;
  }

  public pop(): T | undefined {
    if (this.size === 0) {
      return undefined;
    }

    --this.size;

    return this._queue.shift();
  }
}
