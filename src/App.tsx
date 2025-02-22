import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Music from './components/Music';
import Socials from './components/Socials';
import './App.css';

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/music" element={<Music />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </>
  );
}

export default App;