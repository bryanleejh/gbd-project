// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar';

const App: React.FC = () => {
  return(
    <div>
    My App Component
      <HeaderBar ouId={'idiot'} />
    </div>
  );
}

ReactDOM.render( <App/>, document.getElementById('root') );