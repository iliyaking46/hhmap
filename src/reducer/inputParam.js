export default (newParam = '', action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
    const {type, payload} = action   
// , payload
    switch (type) {
        
        case 'INPUTPARAM': 
            return (
             //   console.log('action.payload')
                newParam = action.payload
            );
         case 'PARAMSUBMIT':
            return (
                newParam = ''
            );    
            
        default:
            return newParam;
    }
}