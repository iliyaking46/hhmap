
export default store => next => action => {
    console.log('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')
    next(action)    
 /*      const {callApi} = action
    if (!callApi) return next(action)
    fetch(callApi)
        .then(res => res.json())
        .then(response => next({...action, response}))  */
}
