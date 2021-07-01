import React from 'react'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data'
import Platos from '../Platos'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <Platos />
          
        </>
    )
}

export default Home
