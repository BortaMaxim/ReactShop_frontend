export const shipping = (fields, totalCart) => {
    let address = {
        city: fields.city,
        country: fields.country,
        line1: fields.line1,
        state: fields.state,
    }
    let phone = {phone: fields.phone}
    return {
        amount: totalCart,
        currency: 'usd',
        description: fields.description,
        shipping: {
            address,
            phone
        }
    }
}

export const billingDetails = (totalCart, fields) => {
    return {
        amount: totalCart,
        currency: fields.currency,
    }
}