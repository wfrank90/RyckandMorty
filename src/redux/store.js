import { createStore } from 'redux';
import rootReducer from './reducer'; // importa tus reducers personalizados aquí

const store = createStore(rootReducer);

export default store;