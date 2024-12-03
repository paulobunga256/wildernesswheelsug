import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';
import ArticleDetails from './pages/ArticleDetails';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<ArticleDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;