import React from 'react';
import { Button } from '../../GlobalStyles';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.style';
import { pricingData } from './data';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            {pricingData.map( item => {
              const { id , icon , head , price , length , feature1 , feature2 , feature3 , button} = item;
              return(
                <PricingCard to='/sign-up' key={id}>
                  <PricingCardInfo>
                    <PricingCardIcon>
                      {icon}
                    </PricingCardIcon>
                    <PricingCardPlan>{head}</PricingCardPlan>
                    <PricingCardCost>{price}</PricingCardCost>
                    <PricingCardLength>{length}</PricingCardLength>
                    <PricingCardFeatures>
                      <PricingCardFeature>{feature1}</PricingCardFeature>
                      <PricingCardFeature>{feature2}</PricingCardFeature>
                      <PricingCardFeature>{feature3}</PricingCardFeature>
                    </PricingCardFeatures>
                    <Button primary>{button}</Button>
                  </PricingCardInfo>
                </PricingCard>
              );
            })}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;