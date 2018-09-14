import React from 'react'

import Header from '../components/Header'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <SignIn />
                <Footer />
            </div>
        )
    }
}
export default Home