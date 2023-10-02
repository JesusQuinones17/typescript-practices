function* countdown(a: number, b: number): Generator<number, void, undefined> {
  for (let i = a; i >= b; i--) {
    yield i;
  }
}
  

  const countdownArray = [...countdown(10, 1)];
  console.log(countdownArray); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  
  const counter = countdown(5, 2);
  console.log(counter.next()); // { value: 5, done: false }
  