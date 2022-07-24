import React from 'react'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MustPopular from '../../components/mustPopular/MustPopular'
import NewProducts from '../../components/newProducts/NewProducts'
import Opportunity from '../../components/opportunity/Opportunity'
import Slider from '../../components/slider/Slider'

const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <Slider />
            <Opportunity />
            <NewProducts />
            <div className="container text-center banner">
                <img className="img-fluid" src="images/BANNER 1.png" alt="" />
            </div>
            <MustPopular />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
