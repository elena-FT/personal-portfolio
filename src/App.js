import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import Resume from './components/qualification/Resume';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
