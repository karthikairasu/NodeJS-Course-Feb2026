import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Support from './pages/Support';
import Hr from './pages/Hr';
import React, { Suspense } from 'react';
// import { Login } from './pages/Login';

/**
 * The App component is the main entry point of the application.
 * It renders a BrowserRouter component which wraps the entire app.
 * Inside the BrowserRouter, it renders a navigation bar with links to various pages,
 * as well as a Routes component which maps URLs to React components.
 * The Routes component contains various Route components which define the routes of the app.
 * The Route components render the corresponding React components when the URL matches the defined path.
 * The App component also uses React.lazy to lazy load the Login component.
 */
function App() {
  const Login = React.lazy(() => import('./components/Login'));
  return (
    <BrowserRouter>
      <div>
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
            <li>
              <Link to="/products/123">Products</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route path="admin" element={<Admin />} />
            <Route path="support" element={<Support />} />
            <Route path="hr" element={<Hr />} />
          </Route>
          <Route path="/products/:id" element={<Products  />} />
          <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
          <Route path="*" element={<div><h1 style={{color:"red"}}>404 Not Found</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
