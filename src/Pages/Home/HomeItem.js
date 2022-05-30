import React from 'react'
import {TotalProducts} from "../Product/TotalProducts";
import {Typography} from "@mui/material";


export const HomeItem = (props) => {
    const {items, handleProductItem} = props

    return (
        <>
            <div>
                <div>
                    {
                        items.length !== 0
                            ? <>
                                <TotalProducts
                                    items={items}
                                    handleProductItem={handleProductItem}
                                />
                            </>
                            : null
                    }
                </div>
            </div>
        </>
    )
}