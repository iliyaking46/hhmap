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

export function loadData() {
    return {
          type: 'LOAD_DATA', 
    //    type: 'INCREMENT',
        callApi: 'https://api.hh.ru/metro/1'
    }
}

