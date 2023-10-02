export function flatten<T>(arr: (T | T[])[]): T[] {
    const flattened: T[] = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattened.push(...flatten(item));
      } else {
        flattened.push(item);
      }
    }
    return flattened;
  }
  