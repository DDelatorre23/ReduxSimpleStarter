import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAoBSFYczOaBjAfeHRQeXG6JrOzs8Uu7As';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

//Create new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this components generated html and put in in the DOm
ReactDOM.render(<App />, document.querySelector('.container'));