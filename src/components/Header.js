import React from 'react';
import logo from '../logo.svg';

export function Header(props) {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {props.myFunc(10,2)}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    )
  }