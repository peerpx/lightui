import React from 'react'

import MsgBox from '../components/MsgBox'
import Header from '../components/Header'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MsgBox />
                <SignIn />
                <Footer />
            </div>
        )
    }
}
export default Home