import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
// import inputParam from '../reducer';
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {}, enhancer) // , inputParam

window.store = store    // Для режима dev-сервера
export default store