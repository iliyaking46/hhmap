export default (paramFromUser = 'Пусто', action) => { // (state, action). "count = 0" - наальное значение, необходимое при инициализации store
    const {type, payload} = action   

    switch (type) {
         case 'PARAMSUBMIT': 
            function logic() {
            //  console.log(this)   // Функция чистая - выводится undefined - нет окружения, контекста. Видимо нужны "мидлвары" 
       
                return paramFromUser = action.payload   // Видимо всегда должна возвращаться перезапись свойства объекта store
                };
            return logic();    
        default:
            return paramFromUser;
    }
}