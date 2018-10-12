import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        isLogged: state.username !== null
    }
}

const ProtectedRoute = ({ component: Component, isLogged, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => isLogged === true
                ? <Component {...props} {...rest} />
                : <Redirect to='/login' />}
        />
    )
}
export default connect(mapStateToProps)(ProtectedRoute)