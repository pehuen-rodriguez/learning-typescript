import { City, Person, Product, Employee } from "./dataTypes";

function getValue<T, K extends keyof T>(item: T, keyname: K) {
  console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");
