const asdasd2 = {
    vacancies: '',
    area: '',
  //  metro: '',
}

export default (paramFromUser = asdasd2, action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
    const {type, payload} = action   

    switch (type) {
         case 'PARAMSUBMIT': 
            function logic() {
            /*    return Object.assign({}, paramFromUser, {
                    vacancies: payload.vacancies,
                    area: payload.area
                  }) */
                  console.log(payload)
                  return Object.assign({}, paramFromUser, {
                    vacancies: payload.vacancies,
                    area: payload.area
                  })
                };
            return logic();    
/*
        case 'LOAD_DATA':
            return Object.assign({}, paramFromUser, {
                vacancies: '',
                area: '',
                metro: action
            }) 
*/
        default:
            return paramFromUser;
    }
}