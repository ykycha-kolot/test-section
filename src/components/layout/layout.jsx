import React from 'react';
import './layout.scss'
import Heading from '../section-heading/sectionHeading';
import Feature from '../feature/feature';
import Cta from '../cta/cta';

export const pageContent = {
    aboveHeading: 'FEATURES',
    heading: 'Here is more of what it can do for you',
    subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.',
    features: [
        {
            featureIcon: 'feature-1_x4xqs2.svg',
            featureHeading: 'Feature 1',
            featureCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.',
        },
        {
            featureIcon: 'feature-2_ckvg9n.svg',
            featureHeading: 'Feature 2',
            featureCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.',
        },
        {
            featureIcon: 'feature-3_qe8adu.svg',
            featureHeading: 'Feature 3',
            featureCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.',
        },
        {
            featureIcon: 'feature-4_qe2sms.svg',
            featureHeading: 'Feature 4',
            featureCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.',
        },
        {
            featureIcon: 'feature-5_oayis8.svg',
            featureHeading: 'Feature 5',
            featureCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.',
        },
        {
            featureIcon: 'feature-6_uc4mzn.svg',
            featureHeading: 'Feature 6',
            featureCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.',
        },
    ]
}

export default function Layout() {
    return (
        <>
            <Heading
                aboveHeading={pageContent.aboveHeading}
                heading={pageContent.heading}
                subHeading={pageContent.subheading}
            />
            <div className='layout-wrap'>
                {pageContent?.features?.map((item, index) => {
                    return <Feature key={index} featureImage={item.featureIcon} featureHeading={item.featureHeading} featureCopy={item.featureCopy} />
                })}
            </div>
            <Cta />
        </>
    )
}