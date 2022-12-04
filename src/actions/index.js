import axios from "axios";

import { GET_COUNTRIES, ORDER_BY_NAME, GET_COUNTRIE_BY_NAME, POST_ACTIVITY, ORDER_BY_POPULATION, FILTER_BY_CONTINENT, GET_ACTIVITIES, GET_COUNTRY_DETAIL, FILTER_BY_ACTIVITY, RESET_DETAIL, LOADING } from "../actionTypes";

export const loading = () => {
  return {
    type: LOADING
  }
}

//--------------------------------------------------------------------------------------------------------------------//
//FETCH
/* export const getCountries = () => dispatch => {
  try {
    return fetch('/countries')
      .then(r => r.json())
      .then(resul => { dispatch({ type: GET_COUNTRIES, payload: resul }) })
  } catch (e) {
    console.log(e)
  }
}; */
//AXIOS
export function getCountries() {
  return async function (dispatch) {
    try {
      let allcountries = await axios(`/countries`);
      //console.log(allcountries.data)
      return dispatch({
        type: GET_COUNTRIES,
        payload: allcountries.data
      })
    }
    catch (e) {
      window.location.href = "http://localhost:3000/countries/";
      alert(`Something happened when fetching the data from the Server, try to refresh the web`)
    }
  }
}


//--------------------------------------------------------------------------------------------------------------------//

/* export const getCountrieByName = (name) => dispatch => {
  try {
    return fetch(`/countries?name=${name}`)
      .then(r => r.json())
      .then(resul => { dispatch({ type: GET_COUNTRIE_BY_NAME, payload: resul }) })
  } catch (e) {
    console.log(e)
  }
}; */

export function getCountrieByName(name) {
  return async function (dispatch) {
    try {
      let getCountry = await axios(`/countries?name=${name}`);
      return dispatch({
        type: GET_COUNTRIE_BY_NAME,
        payload: getCountry.data
      })
    }
    catch (e) {
      window.location.href = "http://localhost:3000/countries/";
      console.log(`There are no Countries with the combination of Characters entered: ${name}`)
      alert(`There are no Countries with the combination of Characters entered: ${name}`)
    }
  }
};

//--------------------------------------------------------------------------------------------------------------------//

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload
  }
};

export const orderByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload
  }
};

//--------------------------------------------------------------------------------------------------------------------//

/* export const filterByContinent = (continent) => dispatch => {
  try {
    return fetch(`/countries/continent/${continent}`)
      .then(r => r.json())
      .then(resul => { dispatch({ type: FILTER_BY_CONTINENT, payload: resul }) })
  } catch (e) {
    console.log(e)
  }
}; */

export function filterByContinent(continent) {
  return async function (dispatch) {
    /* if(continent === 'world') { var urlBack = `http://localhost:3001/countries`} */
    let urlBack = `/countries/continent/${continent}`
    try {
      let getContinent = await axios(urlBack);
      return dispatch({
        type: FILTER_BY_CONTINENT,
        payload: getContinent.data
      })

    }
    catch (e) {
      window.location.href = "http://localhost:3000/countries/";
      console.log(`Something happened when filtering by continent: ${continent}`)
      alert(`Something happened when filtering by continent: ${continent}`)
    }
  }
};
//--------------------------------------------------------------------------------------------------------------------//

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload
  };
};
//--------------------------------------------------------------------------------------------------------------------//

/* export const getActivities = () => dispatch => {
  try {
    return fetch('/activities')
      .then(r => r.json())
      .then(resul => { dispatch({ type: GET_ACTIVITIES, payload: resul }) })
  } catch (e) {
    console.log(e)
  }
}; */

export function getActivities() {
  return async function (dispatch) {
    const activities = await axios(`/activities`);
    return dispatch({
      type: GET_ACTIVITIES,
      payload: activities.data
    })
  }
};
//--------------------------------------------------------------------------------------------------------------------//

export const postActivity = (payload) => {
  return async function (dispatch) {
    const res = await axios.post('/activities', payload);
    return dispatch({ type: POST_ACTIVITY, payload: res.data })
  }
};

//--------------------------------------------------------------------------------------------------------------------//

/* export const getCountryDetail = (id) => dispatch => {
  try {
    dispatch(loading())
    return fetch(`/countries/${id}`)
      .then(r => r.json())
      .then(resul => { dispatch({ type: GET_COUNTRY_DETAIL, payload: resul }) })
  } catch (e) {
    console.log(e)
  }
}; */

export function getCountryDetail(id) {
  return async function (dispatch) {
    try {
      dispatch(loading())
      const info = await axios(`/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: info.data
      })
    }
    catch (e) {
      window.location.href = "http://localhost:3000/countries/";
      console.log(`Something happened when filtering by id: ${id}`)
      alert(`Something happened when filtering by id: ${id}`)
    }
  }
}
//--------------------------------------------------------------------------------------------------------------------//

export const resetDetail = function () {
  return {
    type: RESET_DETAIL,
  };
};

/* export const postActivity = (payload) => dispatch => {
  try {
    return fetch('http://localhost:3001/activities', { method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ payload: 'Textual content' }) })
      .then(r => r.json())
      .then(resul => { dispatch({ type: POST_ACTIVITY, payload: resul }) })
  } catch (e) {
    console.log(e)
  }
}; */


