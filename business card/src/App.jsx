import { useState } from 'react';
import './App.css';
import Info from './components/info';
import About from './components/About';
import Button from './components/Button'
import Footer from './components/Footer';
import Photo from './components/Photo';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='ctn'>
      
        <Info />
        <Button />
        <About />
        <Footer />
      </div>
  )
}


export default App
