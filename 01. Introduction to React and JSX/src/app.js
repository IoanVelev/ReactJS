// Get root html element
const rootHtmlElement = document.getElementById("root");

// Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element

const headingReactSectionElement = (
  <header id="site-header">
    <h1>Hello JSX from React!</h1>
    <h2>JSX is great!</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, asperiores?</p>
  </header>
);
//Render content
rootReactElement.render(headingReactSectionElement);

