import { City, Person, Product, Employee } from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//type shapeType = { name: string };
class Collection<T, K extends keyof T> implements Iterable<T> {
  private items: Map<T[K], T>;

  constructor(initialItems: T[] = [], private propertyName: K) {
    this.items = new Map<T[K], T>();
    this.add(...initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach((newItem) =>
      this.items.set(newItem[this.propertyName], newItem)
    );
  }

  get(key: T[K]): T {
    return this.items.get(key);
  }

  get count(): number {
    return this.items.size;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items.values();
  }
}

let productCollection = new Collection(products, "price");
console.log(`There are ${productCollection.count} products`);

let itemByKey = productCollection.get(100);
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
