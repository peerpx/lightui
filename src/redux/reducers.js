import * as c from "./constants"

const initialState = {
    msgBoxIsOpen: false,
    msgBoxColor: '',
    msgBoxMsg: '',
    loaderIsVisible: false,
    username: localStorage.getItem('username') || null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.DISPLAY_MSG:
            return { ...state, msgBoxIsOpen: true, msgBoxColor: action.color, msgBoxMsg: action.msg }
        case c.HIDE_MSG:
            return { ...state, msgBoxIsOpen: false, msgBoxColor: '', msgBoxMsg: '' }
        case c.SHOW_LOADER:
            return { ...state, loaderIsVisible: true }
        case c.HIDE_LOADER:
            return { ...state, loaderIsVisible: false }
        case c.LOGIN:
            return { ...state, username: action.username }
        case c.LOGOUT:
            return { ...state, username: null }
        default:
            return state
    }
}

export default rootReducer