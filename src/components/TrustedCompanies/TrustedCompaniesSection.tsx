import React, { FC } from 'react'
// import { ReactComponent as BackyardCompanyLogo } from '../../assets/icons/BackyardCompanyLogo.svg'
// import { ReactComponent as NaturalBrandCompanyLogo } from '../../assets/icons/NaturalBrandCompanyLogo.svg'
// import { ReactComponent as LeafNaturalBrandCompanyLogo } from '../../assets/icons/LeafNaturalBrandCompanyLogo.svg'
// import { ReactComponent as MicrowavecompanyLogo } from '../../assets/icons/MicrowavecompanyLogo.svg'
import BackyardCompanyLogo from '../../assets/icons/BackyardCompanyLogo.svg'
import NaturalBrandCompanyLogo from '../../assets/icons/NaturalBrandCompanyLogo.svg'
import LeafNaturalBrandCompanyLogo from '../../assets/icons/LeafNaturalBrandCompanyLogo.svg'
import MicrowavecompanyLogo from '../../assets/icons/MicrowavecompanyLogo.svg'
import SmileCompanyIcon from '../../assets/icons/SmileCompanyIcon.svg'
import CoffeCompanyLogo from '../../assets/icons/CoffeCompanyLogo.svg'


const TrustedCompaniesSection: FC = () => {
  return (
    <div className='container mb-16'>
      <h2 className='text-[44px] tracking-tighter leading-[54px] font-gotu font-normal text-center my-32'>Trusted by 6,000+ Companies < br /> Support Sponsor.</h2>
      {/* first row of the images */}
      <div className='grid grid-cols-4 justify-items-center w-full gap-y-[60px] mb-[60px]'>
        {
          companiesData.slice(0, 4).map(companyData => {
            const { Icon } = companyData;
            return (
              <div>
                <img src={Icon} />
              </div>
            )
          })
        }
      </div>
      {/* second row of the images */}
      <div className='grid grid-cols-5 justify-items-center w-full gap-y-[60px]'>
        <div></div>
        {
          companiesData.slice(-3).map(companyData => {
            const { Icon } = companyData;
            return (
              <div>
                <img src={Icon} />
              </div>
            )
          })
        }
        <div></div>
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
    Icon: BackyardCompanyLogo,
    id: '1'
  },
  {
    label: 'Natural Brand',
    Icon: NaturalBrandCompanyLogo,
    id: '2'
  },
  {
    label: 'Leaf Natural Brand',
    Icon: LeafNaturalBrandCompanyLogo,
    id: '3'
  },
  {
    label: 'Smile',
    Icon: SmileCompanyIcon,
    id: '4'
  },
  {
    label: 'Microwave',
    Icon: MicrowavecompanyLogo,
    id: '5'
  },
  {
    label: 'Natural Nature Beauty',
    Icon: LeafNaturalBrandCompanyLogo,
    id: '6'
  },
  {
    label: 'Cofee',
    Icon: CoffeCompanyLogo,
    id: '7'
  },
]




export default TrustedCompaniesSection