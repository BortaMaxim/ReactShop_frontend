import * as ISOCountriesTypes from '../types/ISOCountriesTypes'
import axios from 'axios'
import {URL} from '../utils/options'


export const GetISOCountries = () => async (dispatch) => {
    await axios.get(`${URL}/ISO_countries`).then(res => {
        dispatch({type: ISOCountriesTypes.GET_ISO_COUNTRIES, payload: res.data})
    })
}