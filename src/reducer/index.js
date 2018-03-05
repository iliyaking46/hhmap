// Это главный редбюсер, управляюий состояниев стора. Он собирает в себе все мелкие редбюсеры
import {combineReducers} from 'redux'   // метод редакса по объединению отдельных редьюсеров
import counterReducer from './counter'  // Импорт отдельных редбюсеров
import inputParamReducer from './inputParam'
import paramStoreReducer from './paramStore'
// import someLogic from './someLogic'

export default combineReducers({
    count: counterReducer, // В этом объекте ключ - элемент стейта (обращение State.count), значение - редьюсер, который управляет этим элементом стейта
    newParam: inputParamReducer,
    paramFromUser: paramStoreReducer
})

