import {createStore} from 'redux'
import reducer from '../reducer'
// import inputParam from '../reducer';

const store = createStore(reducer) // , inputParam

window.store = store    // Для режима dev-сервера
export default store