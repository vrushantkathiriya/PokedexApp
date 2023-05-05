
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/firstpage/FirstPage';
import YourTeam from './components/yourteam/YourTeam';
import Addteam from './components/addteam/Addteam';
import Pokemondetail from './components/pokemondeatil/Pokemondetail';
import { useEffect, useState } from 'react';
import Moves from './components/movecomponent/Moves';
import Movedetail from './components/movecomponent/Movedetail';
import ItemList from './components/Items/ItemList';
import ItemDetail from './components/Items/ItemDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/itemList' element={<ItemList />} />
          <Route exact path="/item/:itemId" element={<ItemDetail />} />
          <Route path='/moves' element={<Moves />} />
          <Route path='/moves/movedetail' element={<Movedetail />} />
          <Route path='/yourteam' element={<YourTeam />} />
          <Route path='/pokemon/:id' element={<Pokemondetail />} />
          <Route path='/pokemon/addteam/:id' element={<Addteam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
