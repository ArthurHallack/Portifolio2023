import { useState } from 'react';
import { Navbar, Infos } from './components/Top'
import Sobre from './components/Sobre'
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <Infos/>
      </header>
      <main>
        <Sobre/>
        <Skills/>
      </main>
      <footer>

      </footer>

    </div>
  )
}

export default App
