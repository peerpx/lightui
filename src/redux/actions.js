import * as c from './constants'

const displayMsg = (color, msg) => ({ type: c.DISPLAY_MSG, color: color, msg: msg })
const hideMsg = () => ({ type: c.HIDE_MSG })

export { displayMsg, hideMsg }