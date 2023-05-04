import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import PathRoutes from './components/helpers/Routes.helper';
import Detail from './components/Detail/Detail';

function App() {
   const [characters, setCharacters] = useState([]);
   
      const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
     setCharacters (characters.filter((char)=> char.id !== Number(id)))
   }

   return (
      // <div className='App'>
      //    <NavBar onSearch={onSearch}/>
      //    <Cards characters={characters} onClose={onClose}/>  
      // </div>
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Routes>
            <Route path={PathRoutes.HOME} element= {<Cards characters={characters} onClose={onClose}/>}/>
            <Route path={PathRoutes.ABOUT} element={<About/>}/> 
            <Route path={PathRoutes.DETAIL} element={<Detail/>}/> 
         </Routes>
      </div>
   );
}

export default App;
