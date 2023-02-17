export const routing = {
  install: `$ npm install react-router-dom@6`,
  browserRouter: `import React from 'react';
  import { BrowserRouter } from 'react-router-dom';
  
  function App() {
      return (
          <BrowserRouter>
               Работает
          </BrowserRouter>
      )
  }
  
  export default App;`,
  routes: `import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
  
  const Home = () => <h1>Home</h1>;
  const About = () => <h1>About</h1>;
  const Contact = () => <h1>Contact</h1>;
  const NotFound = () => <h1>NotFound</h1>;
  
  const App = () => (
    <BrowserRouter>
    <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  
  export default App;`,
  link: `import React from 'react';
  import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
  
  const Home = () => <h1>Home</h1>;
  const About = () => <h1>About</h1>;
  const Contact = () => <h1>Contact</h1>;
  const NotFound = () => <h1>NotFound</h1>;
  
  const App = () => (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  
  export default App;`,
};
