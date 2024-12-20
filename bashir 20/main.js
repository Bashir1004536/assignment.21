// Closure Example
const closureExample = `
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`Outer: \${outerVariable}, Inner: \${innerVariable}\`);
  };
}
const closure = outerFunction("Hello");
closure("World"); // Output: Outer: Hello, Inner: World
`;
document.getElementById('closure-example').textContent = closureExample;

// Destructuring Example
const destructuringExample = `
const [a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

const { name, age } = { name: "John", age: 25 };
console.log(name); // John
console.log(age); // 25
`;
document.getElementById('destructuring-example').textContent = destructuringExample;

// Add examples for other features in a similar way

    