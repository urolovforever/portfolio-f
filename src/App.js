import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <Resume />
          <Portfolio />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
