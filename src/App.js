import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar';
import Home from './Components/home';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
