import React from 'react'
import {Blog, Footer, Possibility, WhatGPT3, Header, Features} from './containers';
import { Cta, Brand, Navbar } from './components';
import './app.css';

function App() {
  return (
    <div classname='App'>
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App