import './App.css';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App() {
  const [route, setRouter] =useState({
    path: 'list',
    id: 1
  })
  return (
    <div className="App">
      {/* <div>
        <button onClick={()=> setRouter('list')}>List</button>
        <button onClick={()=> setRouter('detail')}>Detail</button>
      </div> */}
      <NavBar routing={setRouter}/>
      {route.path === 'list' && <ItemListContainer routing= {setRouter}  greeting='Bienvenidos a nuestra tienda' />}
      {route.path === 'detail' && <ItemDetailContainer id={route.id}/>}
    
    </div>
  );
}

export default App;
