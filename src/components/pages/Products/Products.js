import React from 'react'
import HeroSection from '../../HeroSection'
import {homeOBjTwo} from './Data'
import Pricing from '../../Pricing'

function Products() {
  return (
    <>
        <HeroSection {...homeOBjTwo} />
        <Pricing/>
    </>
  )
}

export default Products;