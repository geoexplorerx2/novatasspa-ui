import React from 'react';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';

const ServicePosTranslate = ({ data }: any) => {
  return (
    <div className='container flex lg:flex-row flex-col-reverse py-[100px] lg:pt-[100px] pt-[32px] pb-[23px] lg:gap-x-[150px]'>
      <div className='container flex flex-col mx-auto lg:mx-0'>

        <div className='mt-[53px]'>
          <img src={data.service_deco_object} alt='' className='lg:max-w-[690px] max-w-[20vw] mx-auto lg:mx-0' />
        </div>

        <div className='font-gotu font-normal text-[30px] lg:text-[64px] text-[#B2A285] leading-[74px] tracking-[0.05em] text-center lg:text-left'>
          {data.service}
        </div>

        <div className='font-poppins font-normal lg:w-[570px] text-[15px] lg:text-[18px] text-[#423930] mt-[30px] leading-[28px] tracking-[0.02em] text-center lg:text-left px-[37px] lg:px-0'>
          {data.description_parapgrath1}
        </div>

        <div className='font-poppins font-normal lg:w-[570px] text-[15px] lg:text-[18px] text-[#423930] mt-[30px] leading-[28px] tracking-[0.02em] text-center lg:text-left px-[37px] lg:px-0'>
          {data.description_parapgrath2}
        </div>

        <div className='mt-[30px] mx-auto lg:mx-0'>
          <ButtonPrimary type="button" className='lg:w-[235px] w-[200px] lg:h-[60px] h-[46px] box-border border-2 border-[#423930]'>
            <span className="font-gotu font-normal lg:text-[22px] text-[16px] text-[#423930] leading-[28px] tracking-[0.02em]">Contact Now</span>
            <span className="text-[#3944B3] ml-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4301 18.819C14.3316 18.8194 14.2339 18.8001 14.1429 18.7623C14.0519 18.7245 13.9694 18.669 13.9001 18.599C13.7606 18.4579 13.6824 18.2674 13.6824 18.069C13.6824 17.8706 13.7606 17.6801 13.9001 17.539L19.4401 11.999L13.9001 6.45901C13.7703 6.31636 13.7005 6.12921 13.7051 5.93642C13.7097 5.74364 13.7884 5.56003 13.9248 5.42374C14.0612 5.28744 14.2449 5.20893 14.4377 5.20451C14.6305 5.20009 14.8175 5.27011 14.9601 5.40001L21.0301 11.47C21.1696 11.6111 21.2478 11.8016 21.2478 12C21.2478 12.1984 21.1696 12.3889 21.0301 12.53L14.9601 18.6C14.8907 18.6698 14.8081 18.7252 14.7171 18.7628C14.6261 18.8004 14.5285 18.8195 14.4301 18.819Z" fill="#423930" />
                <path d="M20.33 12.75H3.5C3.30149 12.7487 3.11149 12.6693 2.97112 12.5289C2.83075 12.3885 2.75131 12.1985 2.75 12C2.75131 11.8015 2.83075 11.6115 2.97112 11.4711C3.11149 11.3307 3.30149 11.2513 3.5 11.25H20.33C20.5285 11.2513 20.7185 11.3307 20.8589 11.4711C20.9993 11.6115 21.0787 11.8015 21.08 12C21.0787 12.1985 20.9993 12.3885 20.8589 12.5289C20.7185 12.6693 20.5285 12.7487 20.33 12.75Z" fill="#423930" />
              </svg>
            </span>
          </ButtonPrimary>
        </div>

      </div>

      <div className='lg:max-w-[690px] max-w-[80vw] mx-auto lg:mx-0'>
        <img className='' src={data.image} />
      </div>

    </div>
  )
};

export default ServicePosTranslate;