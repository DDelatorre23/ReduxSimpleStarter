import React from 'react';
import ReactDOM from 'react-dom';

//Create new component. This component should produce some HTML

const App = () => {
  return <div>Hi!</div>
}

//Take this components generated html and put in in the DOm
ReactDOM.render(<App />, document.querySelector('.container'));