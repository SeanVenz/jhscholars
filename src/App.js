import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutus';
import Home from './pages/home';
import Scholars from './pages/scholars'
import JoinUs from './pages/joinus'
import Loader from './components/loader';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? (
      <Loader/>
    ) : (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/scholars' element={<Scholars/>}/>
          <Route path='/join' element={<JoinUs/>}/>
        </Routes>
      </Router>
    )}
    </>
  );
}

export default App;
