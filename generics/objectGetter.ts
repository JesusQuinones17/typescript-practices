function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] | object {
    return obj[key];
  }
  
  const obj1 = { test: 'testValue' };
  const result1 = getProperty(obj1, 'test');
  
  const obj2 = { 2: [1, 2, 3] };
  const result2 = getProperty(obj2, 2); 
  
  const obj3 = [{ a: 0 }, { a: 1 }, { a: 2 }];
  const result3 = getProperty(obj3, 2); 

console.log(result1, result2, result3);
  