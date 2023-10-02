function countOccurrences<T>(arr: T[], value: T): number {
    return arr.reduce((count, element) => (element === value ? count + 1 : count), 0);
  }
  
  console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1)); // 3
  console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2)); // 2
  console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3)); // 1
  