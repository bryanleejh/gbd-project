// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar';
import * as styles from './style.scss';

const App: React.FC = () => {
  return(
    <div className={styles.container}>
      My App Component
      <HeaderBar ouId={'idiot'} />
    </div>
  );
}

ReactDOM.render( <App/>, document.getElementById('root') );