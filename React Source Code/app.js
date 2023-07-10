/** @format */

const rootNode = document.getElementById("root");

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "article",
    null,
    React.createElement("h1", null, "React Source Code"),
    React.createElement(
      "p",
      null,
      `Open the console and see the usage of react`
    )
  );
}
