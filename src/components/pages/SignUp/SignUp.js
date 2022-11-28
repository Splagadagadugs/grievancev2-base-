import React from 'react'
import HeroSection from '../../HeroSection'
import {homeOBjTwo} from './Data'
import Pricing from '../../Pricing'

function SignUp() {
  return (
    <>

        <Pricing/>
        <HeroSection {...homeOBjTwo} />
    </>
  )
}

export default SignUp;