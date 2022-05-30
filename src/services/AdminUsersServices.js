import {HttpServices} from "./HttpServices";

export class AdminUsersServices {
    http = new HttpServices()

    getUsers = () => {
        let usersUrl = 'get-users'
        return this.http.getData(usersUrl, 'user-token').then(data => {
            return data
        }).catch(error => {
            return error
        })
    }
    getOneUser = (id) => {
        let oneUserUrl = `get-one-user/${id}`
        return this.http.getData(oneUserUrl, 'user-token').then(data => {
            return data
        }).catch(error => {
            return error
        })
    }
    updateUser = (data, id) => {
        let updateUrl = `update-users/${id}`
        return this.http.postData(data, updateUrl, 'user-token').then(data => {
            return data
        }).catch(error => {
            return error
        })
    }
}