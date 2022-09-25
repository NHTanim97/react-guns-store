
import { useState } from 'react';
import './App.css';
import Allgun from './components/AllGun/Allgun';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count + 1)
  }

  return (
    <div className="App">
        <Navbar count = {count}></Navbar>
        <Allgun increment = {increment}></Allgun>
    </div>
  );
}

export default App;
