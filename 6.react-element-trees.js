/** @format */

const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "article",
    null,
    React.createElement("h1", null, "This is a heading"),
    React.createElement("p", null, `This React code actually works`),
    React.createElement("p", null, "You clicked 1 times"),
    React.createElement("button", null, "Click Here")
  );
}

// before react does its work

let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article").item(0);
console.log(articleElements);
console.log(articleElement);

// after react does its work
setTimeout(() => {
  let articleElements = document.getElementsByTagName("article");
  let articleElement = document.getElementsByTagName("article").item(0);
  console.log(articleElements);
  console.log(articleElement);
}, 3000);
