export default store => next => action => {
    
    console.log('dispatch', action)
  //  console.log('before', store.getState())
    
    next(action)
    console.log('after', store.getState())
    
}