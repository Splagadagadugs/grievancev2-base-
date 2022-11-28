import React from 'react'
import HeroSection from '../../HeroSection'
import {homeOBjOne,homeOBjTwo,homeOBjThree,homeOBjFour} from './Data'
import Pricing from '../../Pricing'
import Cards from '../../Cards';
import '../../Cards.css';

function Home() {
  return (
    <>
        <HeroSection {...homeOBjOne} />
        <HeroSection {...homeOBjTwo} />
        <HeroSection {...homeOBjThree} />
        <Pricing/>
        <Cards/>
        <HeroSection {...homeOBjFour} />
    </>
  )
}

export default Home;