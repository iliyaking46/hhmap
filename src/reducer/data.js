export default (data = [], action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
const {type, payload} = action   

switch (type) {
  /*  case 'LOAD_DATA':
        return Object.assign({}, data, {
            metro: action
        }) */
        case 'LOAD_DATA':
        return action

    default:
        return data;
}
}