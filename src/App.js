import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Todos test="some string----" />
  );
}

/*
create a Todo
delete

read

update


store -> configure the store
reducer -> update the store -> not do any computation/api call/manipulation etc.
sagas -> communication through actions

*/

export default App;
