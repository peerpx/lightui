import * as c from './constants'

const displayMsg = (color, msg) => ({ type: c.DISPLAY_MSG, color: color, msg: msg })
const hideMsg = () => ({ type: c.HIDE_MSG })
const showLoader = () => ({ type: c.SHOW_LOADER })
const hideLoader = () => ({ type: c.HIDE_LOADER })
const logIn = (username) => {
    localStorage.setItem('username', username)
    return { type: c.LOGIN }
}
const logOut = () => {
    localStorage.removeItem('username')
    document.cookie = 'ppx=; expires=Thu, 25 Apr 1969 11:09:01 GMT;'
    return { type: c.LOGOUT }
}

export { displayMsg, hideMsg, showLoader, hideLoader, logIn, logOut }