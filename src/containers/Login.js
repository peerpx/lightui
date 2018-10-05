import React from 'react'

import Loader from '../components/Loader'
import MsgBox from '../components/MsgBox'
import Header from '../components/Header'
import LoginBox from '../components/LoginBox'
import Footer from '../components/Footer'



class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Loader />
                <Header />
                <MsgBox />
                <LoginBox />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Login