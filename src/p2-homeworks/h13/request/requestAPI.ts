import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const RequestsAPI = {
    createRequest(success: boolean) {
        return instance.post('', {success})
    }
}