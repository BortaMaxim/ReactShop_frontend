export const switchAvatarsImgUrl = (imgUrl) => {
    let textUrl = imgUrl.includes('https://source.unsplash.com')
    if (textUrl === true) {
        return imgUrl
    }else{
        return `http://localhost:8000/avatars/${imgUrl}`
    }
}