import React from 'react'
import Loader from '../components/Loader'
import Header from '../components/Header'
import MsgBox from '../components/MsgBox'
import PasswordLostCard from '../components/PasswordLostCard'
import Footer from '../components/Footer'


const PasswordLost = () => {
    return (
        <>
            <Loader />
            <Header />
            <MsgBox />
            <PasswordLostCard />
            <Footer />
        </>
    )
}
export default PasswordLost