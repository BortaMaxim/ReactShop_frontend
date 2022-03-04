import {HttpServices} from "./HttpServices";

export class ProfileServices {
    http = new HttpServices()

    loadProfile = () => {
        let profileUrl = "auth/user-info"
        return this.http.getData(profileUrl).then(data => {
            return data
        }).catch(error => {
            return error
        })
    }
}