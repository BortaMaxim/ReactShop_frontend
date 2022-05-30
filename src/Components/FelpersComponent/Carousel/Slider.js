import React, {useContext, useEffect, useState} from 'react'
import '../../../styles/Slider/slider.css'
import "react-image-gallery/styles/css/image-gallery.css";
import {ProductGallery} from "../../../Pages/Product/ProductCard";
import ImageGallery from 'react-image-gallery';
import {switchProductsUrlImg} from "../../../helpers/switchProductsImgUrl";

export const Slider = () => {
    const {product_gallery, product_img} = useContext(ProductGallery)
    const [imageData, setImageData] = useState([])
    const data = product_gallery.map(img => ({original: img.images, thumbnail: img.images}))
    const objImg = {
        original: switchProductsUrlImg(product_img), thumbnail: switchProductsUrlImg(product_img)
    }
    useEffect(() => {
        setImageData([objImg, ...data])

    }, [])

    return <ImageGallery
        items={imageData}
        thumbnailPosition={'left'}
        showFullscreenButton={false}
        showPlayButton={false}
        showIndex={true}
        slideDuration={200}
        autoPlay={false}
    />
}
