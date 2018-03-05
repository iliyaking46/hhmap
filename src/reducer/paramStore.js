export default (paramFromUser = 'Пусто', action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
    const {type, payload} = action   

    switch (type) {
         case 'PARAMSUBMIT':
            return (
                paramFromUser = action.payload
            );    
        default:
            return paramFromUser;
    }
}