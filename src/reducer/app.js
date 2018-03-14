import { 
  LOAD_DATA, 
  START, 
  SUCCESS, 
  FAIL 
} from '../constants'

const initialState = {
  data: [], //вакансии
  isLoadData: true,
  paramOfData: {
      found: '',
      page: 0,
      pages: 0,
      address: ''
  }
}


export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
      case LOAD_DATA + START:
          return {data: payload.data, isLoadData: payload.isLoadData, paramOfData: payload.paramOfData}

      case LOAD_DATA + SUCCESS:
  /*    let xc = {}
        xc.found = payload.paramOfData.found
        xc.page = payload.paramOfData.page + 1
        xc.pages = payload.paramOfData.pages            
        xc.address = payload.paramOfData.address
        */
        //  console.log('_______________reduser/app.js(line 34)_______________', state.data, payload.data)
        let xc = payload.paramOfData
        xc.page = xc.page + 1
        return {data: [...payload.data], isLoadData: payload.isLoadData, paramOfData: xc} 
        //  data: [...state.data, ...payload.data]
      case LOAD_DATA + FAIL:
          return {...state, isLoad: false, paramOfData: 0}

      default: return state;
  }
}