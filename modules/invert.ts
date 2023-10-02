export function invert(obj: { [key: string]: string }): { [key: string]: string } {
    const inverted: { [key: string]: string } = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        inverted[obj[key]] = key;
      }
    }
    return inverted;
  }
  