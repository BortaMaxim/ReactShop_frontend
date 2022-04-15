import React, {useEffect} from 'react'
import {Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {FetchCategoryGetOne} from "../../redux/actions/CategoriesAction";
import {CustomCircularProgress} from "../../Components/FelpersComponent/CustomCircularProgress";
import {CategoryItem} from './CategoryItem'
import {useHistory, useParams} from "react-router-dom";


export const Category = () => {
    const categorySelector = useSelector((state) => ({
        isCatLoading: state.categories.isCatLoading,
        category: state.categories.category,
    }))
    const {isCatLoading, category} = categorySelector
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        dispatch(FetchCategoryGetOne(id))
    }, [])

    const handleProductItemInfo = (id) => {
        history.push(`/product-item/${id}`)
    }

    return (
        <div>
            <Container maxWidth={"lg"}>
                {
                    isCatLoading === true
                    ? <CustomCircularProgress />
                    : <div>
                            {
                                category.success === true
                                && <div>
                                    <Typography variant={'h4'} color={'primary'} align={"center"}>
                                        {category.name}
                                    </Typography>
                                    <CategoryItem category={category} handleProductItemInfo={handleProductItemInfo}/>
                                </div>
                            }
                        </div>
                }
            </Container>
        </div>
    )
}