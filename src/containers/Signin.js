import React from 'react'

import Loader from '../components/Loader'
import MsgBox from '../components/MsgBox'
import Header from '../components/Header'
import SignInBox from '../components/SignInBox'
import Footer from '../components/Footer'


class SignIn extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Loader />
                <Header />
                <MsgBox />
                <SignInBox />
                <Footer />
            </React.Fragment>
        )
    }
}
export default SignIn