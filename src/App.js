import './App.css';
import Body from './Component/Body';
import Header from './Component/Header';
import Cart from './Component/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DataContextProvider from './Context/DataContext';

function App() {


  return (
    <div className="App">
      <DataContextProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
      </DataContextProvider>
    </div>
  );
}

export default App;
