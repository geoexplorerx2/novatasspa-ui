import React from 'react'
import {ReactComponent as FaceBookIcon} from '../../assets/icons/FacebookIcon.svg' 
import {ReactComponent as TwitterIcon} from '../../assets/icons/TwitterIcon.svg' 
import {ReactComponent as InstagramIcon} from '../../assets/icons/InstagramIcon.svg' 
import {ReactComponent as YoutubeIcon} from '../../assets/icons/YoutubeIcon.svg' 


const SocialMediaIcons = () => {
  return (
    <div className='flex justify-between'>
        {socialmediaIconsData.map(item => {
            const { Icon } = item
            return (
            <div>
                <Icon />
            </div>)
        })}
    </div>
  )
}

const socialmediaIconsData = [
    {
        label: 'FaceBook',
        Icon: FaceBookIcon,
        id: '1'
    },
    {
        label: 'Twitter',
        Icon: TwitterIcon,
        id: '2'
    },
    {
        label: 'Instagram',
        Icon: InstagramIcon,
        id: '3'
    },
    {
        label: 'Youtube',
        Icon: YoutubeIcon,
        id: '4'
    },
]


export default SocialMediaIcons