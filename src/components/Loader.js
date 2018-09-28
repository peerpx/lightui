import React from 'react'
import { connect } from 'react-redux'

import loaderIgm from '../img/loader.svg'

const mapStateToProps = (state) => {
    return {
        isVisible: state.loaderIsVisible
    }
}

class Loader extends React.Component {
    render() {
        if (!this.props.isVisible) return null
        return (
            <React.Fragment>
                <div id="loader" />
                <img id="loaderImg" src={loaderIgm} alt="loader" />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(Loader)