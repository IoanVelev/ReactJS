// Get root html element
var rootHtmlElement = document.getElementById("root");

// Initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element

var headingReactSectionElement = React.createElement(
  "header",
  { id: "site-header" },
  React.createElement(
    "h1",
    null,
    "Hello JSX from React!"
  ),
  React.createElement(
    "h2",
    null,
    "JSX is great!"
  ),
  React.createElement(
    "p",
    null,
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, asperiores?"
  )
);
//Render content
rootReactElement.render(headingReactSectionElement);