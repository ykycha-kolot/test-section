import React from 'react';
import './sectionHeading.scss'

export default function Heading({aboveHeading, heading, subHeading}){
    return(
        <div className='heading-wrap'>
            <div className='above-heading'>{aboveHeading}</div>
            <h1 className='heading'>{heading}</h1>
            <div className='sub-heading'>{subHeading}</div>
        </div>
    )
}