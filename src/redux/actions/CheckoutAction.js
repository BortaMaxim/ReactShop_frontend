import axios from 'axios'
import * as CheckoutTypes from '../types/CheckoutTypes'
import {BASE_URL, postOptions} from '../utils/options'

export const BillingAddressAction = (formData, setClientSecret) => async (dispatch) => {
    await axios.post(`${BASE_URL}/stripe`, formData, postOptions).then(res => {
        if (res.data.hasOwnProperty('success') && res.data.success === true) {
            dispatch({type: CheckoutTypes.GET_CLIENT_SECRET_SUCCESS})
            setClientSecret(res.data.client_secret)
        }
    }).catch(error => {
        dispatch({type: CheckoutTypes.GET_CLIENT_SECRET_ERROR})
    })
}

export const ConfirmPaymentAction = (fields, elements, clientSecret, stripe, profile, CardElement) => async (dispatch) => {
    dispatch({type: CheckoutTypes.IS_CHECKING_OUT})
    await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
            name: profile.data.name,
            email: profile.data.email,
            address: {
                city: fields.city,
                country: fields.country,
                line1: fields.line1,
                state: fields.state
            },
            phone: fields.phone,
        }
    }).then(({error, paymentMethod}) => {
        console.log(paymentMethod)
        if (paymentMethod !== undefined) {
            stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id
            }).then(({paymentIntent}) => {
                dispatch({type: CheckoutTypes.CONFIRM_CHECKOUT_SUCCESS, payload: paymentIntent})
            })
        }
        if (error) {
            dispatch({type: CheckoutTypes.CONFIRM_CHECKOUT_ERROR, error})
        }
    })
}
