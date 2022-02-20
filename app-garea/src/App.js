import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';




function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'element={<ItemListContainer greeting='Bienvenidos a nuestra tienda' />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenidos a nuestra tienda' />}/>
        <Route path='/detail/:productId'element={<ItemDetailContainer />}/>
    
      </Routes>
      
    </BrowserRouter>
        
    </div>
  );
}

export default App;
