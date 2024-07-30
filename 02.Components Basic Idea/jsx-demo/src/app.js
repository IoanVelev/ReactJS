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

//Create component without JSX
function Main(props) {
  return React.createElement('main',
     {},
     React.createElement('h3',
      {},
      props.title
     ),
     React.createElement('ul',
      {},
      React.createElement('li',
         {},
        'Man United',
        ),
      React.createElement('li',
         {},
        'Real Madrid'),
      React.createElement('li',
        {},
        'AC Milan'
      ),
      React.createElement('li',
        {},
        'Bayern Munich'
      )
     )
    );
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


const siteContentJSX = (
  <div>
    {headingReactSectionElement}
    <Main title="Best teams:"/>
  </div>
)

//Render content
rootReactElement.render(siteContentJSX);

