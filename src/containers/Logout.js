import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../redux/actions'
import { Redirect } from 'react-router-dom'

const mapDispatchToProps = {
    logOut
}

class Logout extends React.Component {
    render() {
        this.props.logOut()
        return (
            <Redirect to='/' />
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout)