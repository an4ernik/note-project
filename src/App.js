import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Create from './components/Create';
import Note from './components/Note';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="main">
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={Main} />
      <Route path="/about" element={About} />
      <Route path="/create" element={Create} />
      <Route path="/note" element={Note} />
      <Route path="/note:noteURL" element={Note} />
      <Route element={Error} />
    </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
