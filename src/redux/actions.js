import * as c from './constants'

const displayMsg = (color, msg) => ({ type: c.DISPLAY_MSG, color: color, msg: msg })
const hideMsg = () => ({ type: c.HIDE_MSG })
const showLoader = () => ({ type: c.SHOW_LOADER })
const hideLoader = () => ({ type: c.HIDE_LOADER })

export { displayMsg, hideMsg, showLoader, hideLoader }