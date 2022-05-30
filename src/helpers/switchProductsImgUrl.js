export const switchProductsUrlImg = (imgUrl) => {
    let textUrl = imgUrl.includes('https://source.unsplash.com')
    if (textUrl === true) {
        return imgUrl
    }else{
        return `http://localhost:8000/products/${imgUrl}`
    }
}