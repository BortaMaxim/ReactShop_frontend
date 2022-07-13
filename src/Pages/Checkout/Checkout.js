import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Box, Container} from "@mui/material";
import {Button} from "@material-ui/core";
import {CheckoutForm} from "./CheckoutForm";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {BillingAddressAction, ConfirmPaymentAction} from "../../redux/actions/CheckoutAction";
import {billingDetails, shipping} from "./utils";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {checkoutPropsValidation} from "../../propTypes/checkoutPropTypes/checkoutPropsValidation";
import {profilePropsValidation} from "../../propTypes/profileProps/profilePropsValidation";

const Checkout = () => {
    const checkoutSelector = checkoutPropsValidation(useSelector(state => ({
        isChecking: state.checkout.isChecking,
        checkoutSuccess: state.checkout.checkoutSuccess,
        checkoutError: state.checkout.checkoutError,
    })))

    const token = localStorage.getItem('user-token')
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()
    const dispatch = useDispatch()
    const [clientSecret, setClientSecret] = useState('')
    const [hide, setHide] = useState(null)

    const profileSelector = profilePropsValidation(useSelector(state => state.profile.profileResponse))

    let totalCart = localStorage.getItem('total-cart')
    const {fields, handleChange, clear} = useForm({
        amount: totalCart,
        currency: 'usd',
        description: '',
        city: '',
        country: '',
        line1: '',
        state: '',
        phone: ''
    })

    useEffect(() => {
        const formData = billingDetails(totalCart, fields)
        dispatch(BillingAddressAction(formData, setClientSecret, token))
        return () => {}
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (elements == null) {
            return
        }
        dispatch(ConfirmPaymentAction(fields, elements, clientSecret, stripe, profileSelector, CardElement))
        setHide(false)
        setTimeout(() => {
            setHide(true)
        }, 5000)
        clear()
    }

    const removeItem = () => {
        localStorage.removeItem('total-cart')
        history.push(`/home`)
    }
    return (
        <div>
            <Container maxWidth={"md"}>
                <Box mt={4} mb={4}>
                    <Button variant={'contained'} color={'primary'} onClick={removeItem}>Back</Button>
                </Box>
                <CheckoutForm
                    hide={hide}
                    checkoutSelector={checkoutSelector}
                    fields={fields}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </Container>
        </div>
    )
}

export default Checkout