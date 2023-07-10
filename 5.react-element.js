/** @format */

const rootNode = document.getElementById("root");

console.log(React);
console.log(ReactDOM);

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  console.log("Called App");
  return React.createElement("button", null, "Click Me");
}
