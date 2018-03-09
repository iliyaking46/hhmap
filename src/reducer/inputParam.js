const asdasd = {
    vacancies: '',
    schedule: '',
    experience: ''
//    metro: ''
}

export default (newParam = asdasd, action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
    const {type, payload} = action   
    switch (type) {
        
        case 'INPUTPARAM': 
            function logic() {
                    let fromInput = action.payload   
                    let key = Object.keys(fromInput)
                    if (key[0] == 'vacancies') {
                            return Object.assign({}, newParam, {
                            vacancies: fromInput.vacancies
                          })
                    } else if (key[0] == 'schedule') {
                        return Object.assign({}, newParam, {
                            schedule: fromInput.schedule
                          })
                    } else if (key[0] == 'experience') {
                        return Object.assign({}, newParam, {
                            experience: fromInput.experience
                          })
                    }
                };
               return logic(); 
           case 'PARAMSUBMIT':
                return Object.assign({}, newParam, {
                    vacancies: '',
                    schedule: '',
                    experience: ''
                })    
        default:
            return Object.assign({}, newParam, {})
    }
}