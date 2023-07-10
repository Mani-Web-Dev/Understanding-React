/** @format */

const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "section",
    null,
    React.createElement("h1", null, "Counters"),
    React.createElement(Counter, null),

    // this creates a duplicate of the counter function as a react element
    React.createElement(Counter, null)
  );
}

function Counter() {
  return React.createElement(
    "article",
    null,
    React.createElement("h1", null, "This is a heading"),
    React.createElement("p", null, `This React code actually works`),
    React.createElement("p", null, "You clicked 1 times"),
    React.createElement("button", null, "Click Here")
  );
}
