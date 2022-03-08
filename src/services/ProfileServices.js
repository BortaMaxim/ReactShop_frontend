import {HttpServices} from "./HttpServices";

export class ProfileServices {
    http = new HttpServices()

    loadProfile = () => {
        let profileUrl = "user-info"
        return this.http.getData(profileUrl, 'user-token').then(data => {
            return data
        }).catch(error => {
            return error
        })
    }
}