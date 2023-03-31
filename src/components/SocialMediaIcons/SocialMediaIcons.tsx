import React, { FC } from 'react'
import {ReactComponent as FaceBookIcon} from '../../assets/icons/FacebookIcon.svg' 
import {ReactComponent as TwitterIcon} from '../../assets/icons/TwitterIcon.svg' 
import {ReactComponent as InstagramIcon} from '../../assets/icons/InstagramIcon.svg' 
import {ReactComponent as YoutubeIcon} from '../../assets/icons/YoutubeIcon.svg' 

interface SocialMediaIconsProps {
    wrapperClassNames?: string
}


const SocialMediaIcons: FC<SocialMediaIconsProps> = (props) => {
    const { wrapperClassNames } = props
  return (
    <div className={`${wrapperClassNames} flex justify-between`}>
        {socialmediaIconsData.map(item => {
            const { Icon, href } = item
            return (
            <a href={href}>
                <Icon />
            </a>)
        })}
    </div>
  )
}

const socialmediaIconsData = [
    {
        label: 'FaceBook',
        href: '#',
        Icon: FaceBookIcon,
        id: '1'
    },
    {
        label: 'Twitter',
        href: '#',
        Icon: TwitterIcon,
        id: '2'
    },
    {
        label: 'Instagram',
        href: '#',
        Icon: InstagramIcon,
        id: '3'
    },
    {
        label: 'Youtube',
        href: '#',
        Icon: YoutubeIcon,
        id: '4'
    },
]


export default SocialMediaIcons