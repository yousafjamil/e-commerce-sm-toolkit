
import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
    
        {/* <Route path="me" element={<OwnUserProfile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
