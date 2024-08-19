// src/HomePage.js
import React from 'react';
import './HomePage.css'; // Import custom styles

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <img src="/logo.png" alt="Logo" className="logo" /> {/* Add the logo image */}
        <div className="header-title">
          <h1>SentiAn</h1>
        </div>
      </header>
      <nav className="home-nav">
        <ul>
          <li><a href="#section1">Senti Analyzer</a></li>
          <li><a href="#section2">Summarizer</a></li>
          <li><a href="#section3">Social Media Analytics</a></li>
        </ul>
      </nav>
      <main className="home-content">
        <section id="section1">
          <h2>Content Section 1</h2>
          <p>Details about Section 1 go here.</p>
        </section>
        <section id="section2">
          <h2>Content Section 2</h2>
          <p>Details about Section 2 go here.</p>
        </section>
        <section id="section3">
          <h2>Content Section 3</h2>
          <p>Details about Section 3 go here.</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
