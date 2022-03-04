import {HttpServices} from "./HttpServices";

export class AuthServices {
    http = new HttpServices()

    registerUserService = (credentials) => {
        return this.http.postData( credentials,"register").then(data => {
            return data
        }).catch(error => {
            return error
        })
    }

    loginUserService = (credentials) => {
        return this.http.postData(credentials, 'login').then(data => {
            return data
        }).catch(error => {
            return error
        })
    }

    logoutUserService = () => {
        return this.http.getData('logout').then(data => {
            return data
        }).catch(error => {
            return error
        })
    }
}