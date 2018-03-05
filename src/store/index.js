import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

window.store = store    // Для режима dev-сервера
export default store