import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

// STYLES
import Theme from "./config/theme";
import { GlobalStyles } from "./components/GlobalStyles";

import { routes } from './routes'

import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';

function App() {
  return (
    <Theme>
      <Fragment>
        <GlobalStyles />
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component} />
          ))}
        </Routes>
        <Footer />
        <WhatsAppButton />
      </Fragment>
    </Theme>
  );
}

export default App;

/**
 *          
 */