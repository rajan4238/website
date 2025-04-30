

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      <main>
        <h2>Hello, React World!</h2>
        <p>This is a simple website made with React and CSS.</p>
      </main>

      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
