import React from 'react'
import PropTypes from 'prop-types'
import {TotalProducts} from "../Product/TotalProducts";


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

HomeItem.propTypes = {
    items: PropTypes.array,
    handleProductItem: PropTypes.func,
}