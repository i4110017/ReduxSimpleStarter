import React from 'react';
import ReactDOM from 'react-dom'

// Create a new component. It should produce HTML.
const App = () => {
  return <div>Hello World!</div>;
}

// The this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
