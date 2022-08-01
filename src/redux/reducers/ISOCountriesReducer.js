import * as ISOCountiesTypes from '../types/ISOCountriesTypes'

export const ISOCountriesReducer = (state = [], action) => {
    switch (action.type) {
        case ISOCountiesTypes.GET_ISO_COUNTRIES:
            let ISOCountries = action.payload
            return {
                ...state,
                ISOCountries
            }
        default:
            return state
    }
}