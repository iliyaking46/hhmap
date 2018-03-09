const asdasd2 = {
    vacancies: '',
    schedule: '',
    experience: ''
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
                    schedule: payload.schedule,
                    experience: payload.experience
                  })
                };
            return logic();    
/*  search_field
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