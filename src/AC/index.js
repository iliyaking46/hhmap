export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function viewInput(e) {
    return {
        type: 'INPUTPARAM',
        payload: e
    }
}

export function paramSubmit(e) {
    return {
        type: 'PARAMSUBMIT',
        payload: e
    }
}

export function loadData(e) {
    let adress = 'https://api.hh.ru' + e
    return {
          type: 'LOAD_DATA', 
    //    type: 'INCREMENT',
        callApi: adress
        //'https://api.hh.ru/metro/1'
    }
}

