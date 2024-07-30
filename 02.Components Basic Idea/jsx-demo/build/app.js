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

//Create component without JSX
function Main(props) {
  return React.createElement('main', {}, React.createElement('h3', {}, props.title), React.createElement('ul', {}, React.createElement('li', {}, 'Man United'), React.createElement('li', {}, 'Real Madrid'), React.createElement('li', {}, 'AC Milan'), React.createElement('li', {}, 'Bayern Munich')));
}

// const siteContent = React.createElement(
//   'div',
//   {},
//   headingReactSectionElement,
//   React.createElement(
//     Main, 
//     {title: 'Best teams:'},
//   ),
// );


var siteContentJSX = React.createElement(
  "div",
  null,
  headingReactSectionElement,
  React.createElement(Main, { title: "Best teams:" })
);

//Render content
rootReactElement.render(siteContentJSX);