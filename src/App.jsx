import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header'
function App() {
  return (
    <Router>
      <main>
        <Header/>
      </main>
    </Router>
  );
}

export default App;