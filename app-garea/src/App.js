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
        <Route paht='/' element={ <ItemListContainer/>}/>
        <Route paht='/category/:categoryId' element={ <ItemListContainer/>}/>
        <Route paht='/detail/:productId' element={ <ItemDetailContainer/>}/>
        <ItemDetailContainer/>
        </Routes>
        
      </BrowserRouter>
    
    </div>
  );
}



export default App;


