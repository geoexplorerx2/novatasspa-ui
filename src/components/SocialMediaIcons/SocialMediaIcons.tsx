import React, { FC } from 'react'
import {ReactComponent as FaceBookIcon} from '../../assets/icons/FacebookIcon.svg' 
import {ReactComponent as TwitterIcon} from '../../assets/icons/TwitterIcon.svg' 
import {ReactComponent as InstagramIcon} from '../../assets/icons/InstagramIcon.svg' 
import {ReactComponent as YoutubeIcon} from '../../assets/icons/YoutubeIcon.svg' 
import {ReactComponent as WhatsappIcon} from '../../assets/icons/whatsapp.svg'
import {ReactComponent as Linkedin} from '../../assets/icons/linkedin.svg'

interface SocialMediaIconsProps {
    wrapperClassNames?: string,
    iconClassNames?: string,
}


const SocialMediaIcons: FC<SocialMediaIconsProps> = (props) => {
    const { wrapperClassNames, iconClassNames } = props
  return (
    <div className={`${wrapperClassNames} flex justify-between`}>
        {socialmediaIconsData.map(item => {
            const { Icon, href } = item
            return (
            <a target='_blank' rel='noreferrer' className='' href={href}>
                <Icon className={iconClassNames}/>
            </a>)
        })}
    </div>
  )
}

const socialmediaIconsData = [
    {
        label: 'FaceBook',
        href: 'https://m.facebook.com/people/Novatas-Spa-Management/100090799741261/',
        Icon: FaceBookIcon,
        id: '1'
    },
    // {
    //     label: 'Twitter',
    //     href: '#',
    //     Icon: TwitterIcon,
    //     id: '2'
    // },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/novatasspa/',
        Icon: InstagramIcon,
        id: '3'
    },
    // {
    //     label: 'Youtube',
    //     href: '#',
    //     Icon: YoutubeIcon,
    //     id: '4'
    // },
    // {
    //     label: 'Whatsapp',
    //     href: 'https://wa.me/905417600248',
    //     Icon: WhatsappIcon,
    //     id: '5'
    // },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/novatas-spa-management/',
        Icon: Linkedin,
        id: '6'
    },
]


export default SocialMediaIcons