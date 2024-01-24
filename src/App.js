import './App.css';
import Productsblock from './components/Productsblock'; 
import Upload from './components/Upload';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Cart from './components/Cart';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <a href="/" target="_self">
        <img className='logo' src='./productimages/logo.png' />
      </a>
      <Home/>
      <Navbar/>
      <Sidebar/>
      <Productsblock/>
      

      

    
      
    </div>
  );
}

export default App;
