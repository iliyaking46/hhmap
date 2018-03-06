const asdasd = {
    vacancies: '',
    area: ''
}

export default (newParam = asdasd, action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
    const {type, payload} = action   
    switch (type) {
        
        case 'INPUTPARAM': 
            function logic() {
                    // JSON.stringify()
                    let fromInput = action.payload   
                    let key = Object.keys(fromInput)
                //  console.log(fromInput)
                    if (key[0] == 'vacancies') {
                            return Object.assign({}, newParam, {
                            vacancies: fromInput.vacancies
                          })
                    } else if (key[0] == 'area') {
                        return Object.assign({}, newParam, {
                            area: fromInput.area
                          })
                    }
                };
                    

                return logic(); 
           case 'PARAMSUBMIT':
                return Object.assign({}, newParam, {
                    vacancies: '',
                    area: ''
                })    
            
        default:
            return Object.assign({}, newParam, {})
    }
}