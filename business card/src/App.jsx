import { useState } from 'react';
import './App.css';
import Info from './components/info';
import About from './components/About';
import Button from './components/Button';
import Interests from './components/Interests';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ctn">
      <Photo />
      <div className='ctn-mid-section'>
        <Info />
        <Button />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  )
}


export default App
