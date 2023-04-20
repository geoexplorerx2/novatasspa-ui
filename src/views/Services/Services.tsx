import React from 'react';
import { Service, ServicePosTranslate } from '../../components';
import { SERVICES_DATA } from '../../data/services';
import PricesListSection from '../../components/PricesListSection/PricesListSection';

const Services = () => {
  return (
    <div className='container'>
      {
        SERVICES_DATA.filter((a , _ ) => _ < 1).map((service: any, idx: number) => (
          idx % 2 == 0 ?
            <Service data={service} /> :
            <ServicePosTranslate data={service} />
        ))
      }
      <PricesListSection />
    </div>
  )
};

export default Services;