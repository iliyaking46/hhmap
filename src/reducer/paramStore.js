const asdasd2 = {
    vacancies: '',
    area: ''
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
        default:
            return paramFromUser;
    }
}