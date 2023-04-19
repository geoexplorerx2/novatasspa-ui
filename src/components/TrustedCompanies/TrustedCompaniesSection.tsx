import React, { FC } from 'react'
// import { ReactComponent as BackyardCompanyLogo } from '../../assets/icons/BackyardCompanyLogo.svg'
// import { ReactComponent as NaturalBrandCompanyLogo } from '../../assets/icons/NaturalBrandCompanyLogo.svg'
// import { ReactComponent as LeafNaturalBrandCompanyLogo } from '../../assets/icons/LeafNaturalBrandCompanyLogo.svg'
// import { ReactComponent as MicrowavecompanyLogo } from '../../assets/icons/MicrowavecompanyLogo.svg'
import logo_1 from '../../assets/logo/logolar_02.svg'
import logo_2 from '../../assets/logo/logolar-03.svg'
import logo_3 from '../../assets/logo/logolar-04.svg'
import logo_4 from '../../assets/logo/logolar-05.svg'
import logo_5 from '../../assets/logo/logolar-06.svg'
import logo_6 from '../../assets/logo/logolar-07.svg'


const TrustedCompaniesSection: FC = () => {
  return (
    <div className='container mb-16'>
      <h2 className='text-2xl md:text-[44px] md:tracking-tighter leading-[54px] font-gotu font-normal text-center my-20 md:my-32'>Trusted by 6,000+ Companies < br /> Support Sponsor.</h2>
      {/* first row of the images */}
      <div className='grid grid-cols-2 lg:grid-cols-4 justify-items-center w-full gap-y-[60px] mb-[60px]'>
        {
          companiesData.slice(0, 4).map(companyData => {
            const { Icon } = companyData;
            return (
              <div>
                <img src={Icon} className='!w-[300px]'  />
              </div>
            )
          })
        }
      </div>
      {/* second row of the images */}
      <div className='grid grid-cols-2 lg:grid-cols-5 justify-items-center w-full gap-y-[60px]'>
        <div className='hidden lg:inline-block'></div>
        {
          companiesData.slice(-3).map(companyData => {
            const { Icon } = companyData;
            return (
              <div>
                <img src={Icon} className='!w-[300px]' />
              </div>
            )
          })
        }
        <div className='hidden lg:inline-block'></div>
      </div>
      <div className='grid grid-cols-3 justify-items-center w-full'>
        {/* {
            companiesData.slice(-3).map(companyData => {
              const { Icon } = companyData;
              return (
                <div>
                  <Icon />
                </div>
              )
            })
          } */}
      </div>
    </div>
  )
}




const companiesData = [
  {
    label: 'The Backyard',
    Icon: logo_1,
    id: '1'
  },
  {
    label: 'Natural Brand',
    Icon: logo_2,
    id: '2'
  },
  {
    label: 'Leaf Natural Brand',
    Icon: logo_3,
    id: '3'
  },
  {
    label: 'Smile',
    Icon: logo_4,
    id: '4'
  },
  {
    label: 'Microwave',
    Icon: logo_5,
    id: '5'
  },
  {
    label: 'Natural Nature Beauty',
    Icon: logo_6,
    id: '6'
  },
]




export default TrustedCompaniesSection