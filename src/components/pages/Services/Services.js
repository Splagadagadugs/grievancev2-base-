import React from 'react'
import HeroSection from '../../HeroSection'
import {homeOBjOne} from './Data'
import Pricing from '../../Pricing'

function Services() {
  return (
    <>

        <Pricing/>
        <HeroSection {...homeOBjOne} />
    </>
  )
}

export default Services;