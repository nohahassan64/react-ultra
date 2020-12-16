import React from 'react'
import {  homeObjTwo, homeObjThree , homeObjFour} from '../HomePage/Data'
import { InfoSection , Pricing } from '../../components'

const Products = () => {
    return (
        <>
           <InfoSection {...homeObjTwo}/> 
           <InfoSection {...homeObjThree}/>
           <Pricing /> 
           <InfoSection {...homeObjFour}/> 
        </>
    )
}

export default Products;
