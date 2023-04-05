import React from 'react';
import { Service, ServicePosTranslate } from '../../components';
import { SERVICES_DATA } from '../../data/services';

const Services = () => {
  return (
    <div className='container'>
        {
          SERVICES_DATA.map((service: any, idx: number) => (
            idx % 2 == 0 ?
              <Service data = { service } /> :
              <ServicePosTranslate data = { service } />
          ))
        }
    </div>
  )
};

export default Services;