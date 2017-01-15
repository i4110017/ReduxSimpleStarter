import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBIwWu4sxh_lKjzpxNvQjfArMJiAQm2hHo";
// Create a new component. It should produce HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// The this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
