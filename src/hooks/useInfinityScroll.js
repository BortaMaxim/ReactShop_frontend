import {useEffect, useRef, useState} from 'react'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FetchProducts} from "../redux/actions/ProductsAction";


export const useInfinityScroll = (props) => {
    const {getItems} = props
    const dispatch = useDispatch()

    const [items, setItems] = useState([])
    const pageToLoad = useRef(new URLSearchParams(window.location.search).get('page') || 1)
    const initialPageLoaded = useRef(false)
    const [hasNext, setHasNext] = useState(true)
    const history = useHistory()

    const loadItems = async (page, itemCombineMethod) => {
        const data = await getItems({page})
        setHasNext(data.data.last_page > pageToLoad.current)
        setItems((prevItems) => {
            return itemCombineMethod === 'prepend'
                ? [...data.data.data, ...prevItems]
                : [...prevItems, ...data.data.data]
        })
    }

    const loadNext = () => {
        pageToLoad.current = Number(pageToLoad.current) + 1
        history.replace(dispatch(FetchProducts(pageToLoad.current)))
        loadItems(pageToLoad.current, 'append')
    }

    useEffect(() => {
        if (initialPageLoaded.current) {
            return
        }
        loadItems(pageToLoad.current, 'append')
        initialPageLoaded.current = true

    }, [loadItems, initialPageLoaded])

    return {
        items, hasNext, loadNext
    }
}