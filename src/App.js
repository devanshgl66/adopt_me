import React from 'react'
import SearchParam from './searchParams'
import Details from './Details'
import {Router } from '@reach/router'
import './App.css';

function App() {
  return (
        <Router>       
            <SearchParam path="/" />
            <Details path='detail/:id' />
        </Router>
  );
}

export default App;
