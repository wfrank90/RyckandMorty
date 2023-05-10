import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards/Cards';
import Nav from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/form';
import Favorites from './components/Favorites/Favorites';


const EMAIL = 'login@mail.com';
const PASSWORD = 'milogin123';
//Ruta al componente favorites

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access, navigate]);

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Usuario o contraseña inválidos');
    }
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data?.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => window.alert('Error'));
  };

  const onClose = (id) => {
    const newCharacters = characters.filter((char) => char.id !== id);
    setCharacters(newCharacters);
  };

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
