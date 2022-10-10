import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';


function App() {
  return (
    <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar />

      <main className='container mx-auto px-3 pb-12'></main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/notfound' element={<NotFound />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes> 

      <Footer />
    </div>
    </Router>
  );
}

export default App;
