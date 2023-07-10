/** @format */

// this is a imaginary representation of how the Virtual DOM works

let markup = {
  type: "article",
  children: [
    {
      type: "h2",
      children: [
        {
          type: "text",
          value: "Counter",
        },
      ],
    },
    {
      type: "h3",
      children: [
        {
          type: "text",
          value: "Thats works",
        },
      ],
    },
    {
      type: "p",
      children: [
        {
          type: "text",
          value: "You have clicked ",
        },
        {
          type: "strong",
          children: [
            {
              type: "em",
              children: [
                {
                  type: "text",
                  value: "1",
                },
              ],
            },
          ],
        },
        {
          type: "text",
          value: " times",
        },
      ],
    },
    {
      type: "button",
      children: [
        {
          type: "text",
          value: "Click Me",
        },
      ],
    },
  ],
};

const main = document.getElementById("main");

function addElements(pojoElement, parentDOMNode) {
  let newDOMNode =
    pojoElement.type === "text"
      ? document.createTextNode(pojoElement.value)
      : document.createElement(pojoElement.type);

  if (pojoElement.children) {
    pojoElement.children.forEach((child) => {
      addElements(child, newDOMNode);
    });
  }
  console.log(newDOMNode);
  parentDOMNode.appendChild(newDOMNode);
}

addElements(markup, main);
