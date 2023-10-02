class Counter {
    private static instance: Counter;
    private data: number = 0;
  
    private constructor() {}
  
    static getInstance(): Counter {
      if (!Counter.instance) {
        Counter.instance = new Counter();
      }
      return Counter.instance;
    }
  
    increase(): void {
      this.data++;
    }
  
    decrease(): void {
      this.data--;
    }
  
    getState(): number {
      return this.data;
    }
  
    static destroy(): void {
      Counter.destroy;
    }
  }
  

  const instance1 = Counter.getInstance();
  instance1.increase();
  console.log(instance1.getState()); 
  
  const instance2 = Counter.getInstance();
  console.log(instance2.getState()); 
  
  instance2.increase();
  console.log(instance1.getState()); 
  console.log(instance2.getState()); 

  