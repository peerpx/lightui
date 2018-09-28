import React from 'react'

import Loader from '../components/Loader'
import MsgBox from '../components/MsgBox'
import Header from '../components/Header'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Loader />
                <Header />
                <MsgBox />
                <SignIn />
                <Footer />
            </React.Fragment>
        )
    }
}
export default Home