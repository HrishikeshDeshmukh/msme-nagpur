import React from 'react'
import Slider from "../components/Slider";
import Cards from '../components/Cards';
import Services from '../components/Services';
import LatestNews from '../components/LatestNews';
import UsefulLinks from '../components/UsefulLinks';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Slider />
      <Cards/>
      <Services />
      <LatestNews/>
      <UsefulLinks />
      <Footer />
    </>
  )
}

export default Home