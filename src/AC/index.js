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

