export class HttpServices {
    url = "http://localhost:8000/api/auth"

    postData = async (data, added_url, tokenId = "") => {
        const token = await localStorage.getItem(tokenId);
        const requestOptions = this.postRequestOptions(token, data);
        return fetch(this.url + "/" + added_url, requestOptions).then(
            response => response.json()
        )
    }

    getData = async (added_url, tokenId = "") => {
        const token = await localStorage.getItem(tokenId);
        const requestOptions = this.getRequestOptions(token);
        return fetch(this.url + "/" + added_url, requestOptions).then(
            response => response.json()
        )
    }

    postRequestOptions = (token, data) => {
        let requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return requestOptions;
    }

getRequestOptions = (token) => {
    let getRequestOption = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer  ${token}`,
            'Content-type': 'application/json'
        },
    }
    return getRequestOption
}
}