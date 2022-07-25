import React from 'react'
import classes from "../../styles/Auth.module.css";
import {Box, CircularProgress, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Button} from "@material-ui/core";
import {CardElement} from "@stripe/react-stripe-js";


export const CheckoutForm = (props) => {
    const {fields, handleSubmit, handleChange, checkoutSelector, hide} = props
    const {
        amount,
        currency,
        description,
        city,
        country,
        line1,
        state,
        phone
    } = fields

    return (
        <div className={classes.auth_wrapper}>
            <form onSubmit={handleSubmit}>
                <Box mt={2}>
                    <TextField
                        type="number"
                        name="amount"
                        label="amount"
                        fullWidth={true}
                        value={amount}
                    />
                </Box>
                <Box mt={2}>
                    <InputLabel id="currency">Currency:</InputLabel>
                    <Select
                        labelId="currency"
                        name={'currency'}
                        autoWidth
                        label="currency"
                        onChange={handleChange}
                        value={currency}
                    >
                        <MenuItem value={'usd'}>
                            <em>USD</em>
                        </MenuItem>
                        <MenuItem value={'eur'}>
                            <em>EUR</em>
                        </MenuItem>
                    </Select>
                </Box>
                <Box mt={2}>
                    <TextField
                        type="text"
                        name="description"
                        fullWidth={true}
                        label="description"
                        value={description}
                        onChange={handleChange}
                    />
                </Box>
                <Box mt={2}>
                    <InputLabel id="address">Address:</InputLabel>
                    <Box mt={2}>
                        <TextField
                            type="text"
                            name="city"
                            fullWidth={true}
                            label="city"
                            value={city}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mt={2}>
                        {
                            hide === false
                                ? <>
                                    {
                                        checkoutSelector.checkoutError.type = 'invalid_request_error'
                                            && <Typography color={'secondary'}>
                                                {checkoutSelector.checkoutError.message}
                                            </Typography>
                                    }
                                </>
                                : null
                        }
                        <TextField
                            type="text"
                            name="country"
                            fullWidth={true}
                            label="country"
                            value={country}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mt={2}>
                        <TextField
                            type="text"
                            name="line1"
                            fullWidth={true}
                            label="street"
                            value={line1}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mt={2}>
                        <TextField
                            type="text"
                            name="state"
                            fullWidth={true}
                            label="state"
                            value={state}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mt={2}>
                        <TextField
                            type="text"
                            name="phone"
                            fullWidth={true}
                            label="phone"
                            value={phone}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mt={2}>
                        <CardElement/>
                    </Box>
                    {
                        hide === false
                            ? <div>
                                {
                                    checkoutSelector.checkoutError.code === "incomplete_number"
                                        ? <Typography
                                            color={'secondary'}>{checkoutSelector.checkoutError.message}</Typography>
                                        : null
                                }
                            </div>
                            : null
                    }
                    {
                        hide === false
                            ? <div>
                                {
                                    checkoutSelector.checkoutSuccess.status === "succeeded"
                                        ? <Typography color={'primary'}>Checkout success! :)</Typography>
                                        : null
                                }
                            </div>
                            : null
                    }
                </Box>
                <Box mt={2}>
                    <Button type={"submit"} fullWidth={true} color={"primary"} variant={"outlined"}>
                        {
                            checkoutSelector.isChecking === true
                                ? <CircularProgress/>
                                : <Typography>Confirm</Typography>
                        }
                    </Button>
                </Box>
            </form>
        </div>
    )
}