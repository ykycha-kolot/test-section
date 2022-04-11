import React from 'react';
import './feature.scss'

const imagePath = 'https://res.cloudinary.com/dbbrpie5a/image/upload/v1649685284/test-task/'
export default function Feature({featureImage, featureHeading, featureCopy}) {
    return (
        <div className='feature-wrap'>
            <img src={imagePath + featureImage} alt="feature icon"/> 
            <h2 className='feature-heading'>{featureHeading}</h2>
            <div className='feature-copy'>{featureCopy}</div>
        </div>
    )
}