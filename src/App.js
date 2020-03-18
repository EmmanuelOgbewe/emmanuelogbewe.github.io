import React from 'react';
import Navbar from './common/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Section from './common/section/Section'
import Showcase from './components/showcase/Showcase'
import Projects from './components/projects/Projects'
import Footer from './common/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Section id="section1" title="ABOUT"/>
      <About/>
      <Section id="section2" title="SHOWCASE"/>
      <Showcase/>
      <Section title="PROJECTS"/>
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
