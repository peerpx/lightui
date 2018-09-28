/* API wrapper */

import axios from 'axios'

import store from '../redux/store'

import { displayMsg, hideMsg, showLoader, hideLoader } from '../redux/actions'


// base api client
const client = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    header: {
        'Accept': 'application/json',

    },
    withCredentials: true
})

// request interceptor
client.interceptors.request.use(
    (config) => {
        // hide message
        store.dispatch(hideMsg())
        // show loader
        store.dispatch(showLoader())
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// response interceptors
client.interceptors.response.use(
    (response) => {
        // hide loader
        store.dispatch(hideLoader())
        return response
    },
    (error) => {
        store.dispatch(hideLoader())
        // todo handle 401 ->logout && redirect login
        // default -> display raw error message (can be 
        // overrided by caller if it display another message)
        let msg = error.toString()
        if (error.response && error.response.data && error.response.data.msg) {
            msg = error.response.data.msg
        }
        store.dispatch(displayMsg('danger', msg))
    }
)

// sign in 
export const authSignIn = (email, password) => {
    return client.post('api/v1/user', { 'email': email, 'password': password })
}


