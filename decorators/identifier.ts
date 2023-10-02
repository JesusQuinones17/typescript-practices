function identifier(className: string) {
    return function (target: any) {
      target.prototype['identify'] = function () {
        return `${target.name}-${className}`;
      };
    };
  }
  
  @identifier('example')
  class TestIdentifier {}
  
  const test1 = new TestIdentifier();
  console.log(test1['identify']()); // Test-example
  