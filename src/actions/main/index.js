import {
  LOAD_DATA, START, SUCCESS, FAIL
} from '../../constants'

export function loadData(metroId, textSearch, paging) {
  return (dispatch) => {

    dispatch({
      type: LOAD_DATA + START,
      payload: { data: [], isLoadData: false, paramOfData: {
        found: 'Hello from actions/main/index.js(line 11)',
        page: 0,
        pages: 0,
        address: 'Hello from actions/main/index.js(line 14)'
      }
     }
    })

    const metro = metroId ? 'metro=' + metroId : '';
    const text = textSearch ? `text=${textSearch.split(' ').join('+')}` : '';
    const addUrl = [metro, text].join('&');
    const baseUrl = `https://api.hh.ru/vacancies?area=1&${addUrl}`;
    //  console.log('_______________actions/main/index.js(line 73)_______________', paging);

    fetch(`${baseUrl}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(resp => {
        //  console.log('_______________actions/main/index.js(line 92)_______________', resp.found);
        const apiPromises = [];
        apiPromises.push(fetch(`${baseUrl}&page=${0}`).then(resp => resp.json().then(resp => resp.errors ? [] : resp.items))) 
        //  console.log('_______________actions/main/index.js(line 100)_______________', `${baseUrl}&page=${paging}` )
        Promise.all(apiPromises).then(data => dispatch({
          type: LOAD_DATA + SUCCESS,
          payload: { data: data.reverse().reduce((newArr, nextArr) => [...newArr, ...nextArr], []), isLoadData: true, paramOfData: {found: resp.found, page: paging, pages: resp.pages, address: baseUrl} }
        })
      )
      })
      .catch(error => {
        dispatch({
          type: LOAD_DATA + FAIL,
          payload: { error }
        })
      })
  }
}



export function loadPage(paging, decr) {
  return (dispatch) => {

  /*  dispatch({
      type: LOAD_DATA + START,
      payload: { data: [], isLoadData: false, paramOfData: {
          found: 'Hello from actions/main/index.js(line 61)',
          page: 0,
          pages: 0,
          address: 'Hello from actions/main/index.js(line 64)'
        } 
      }
    })
*/
    const baseUrl = paging.address
    //  console.log('_______________actions/main/index.js(line 130)_______________', paging);
    fetch(`${baseUrl}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(resp => {
        const hghg = resp.found
        const apiPromises = [];
        apiPromises.push(fetch(`${baseUrl}&page=${paging.page - decr}`).then(resp => resp.json().then(resp => resp.errors ? [] : resp.items))) 
        //  console.log('_______________actions/main/index.js(line 145)_______________',`${baseUrl}&page=${paging.page - decr}` )
        Promise.all(apiPromises).then(data => dispatch({
          type: LOAD_DATA + SUCCESS,
          payload: { data: data.reverse().reduce((newArr, nextArr) => [...newArr, ...nextArr], []), isLoadData: true, paramOfData: {found: hghg, page: paging.page - decr, pages: paging.pages, address: baseUrl} }
        })
      )
      })
      .catch(error => {
        dispatch({
          type: LOAD_DATA + FAIL,
          payload: { error }
        })
      })
  }
}
