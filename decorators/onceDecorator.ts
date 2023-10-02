function once(_target: any, _methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;
  let isFirstTime = true;
  descriptor.value = function (...args: any[]) {
      if (isFirstTime) {
          isFirstTime = false;
          this.previousValue = originalMethod.apply(this, args);
      } else {
          return this.previousValue;
      }
  };
  return descriptor;
}

class Test {
  data: any;
  
  @once
  setData(newData: any) {
    this.data = newData;
  }
}

const test = new Test();
test.setData([1, 2, 3]);
console.log(test.data); // [1, 2, 3]
test.setData("delete above array");
console.log(test.data); // [1, 2, 3]
