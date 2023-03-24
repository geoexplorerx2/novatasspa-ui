import React, { useState, useRef } from 'react';
import play from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.png';
import vid_poster from '../../assets/images/vid_poster.png';

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef?.current?.pause();
        } else {
            videoRef?.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    function millisToMinutesAndSeconds(millis: number) {
        let minutes = Math.floor(millis / 60000);
        let seconds = Number(((millis % 60000) / 1000).toFixed(0));
        return (
            seconds === 60 ?
            (minutes+1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
          )
      }

    const handleProgress = () => {
        const length = videoRef?.current?.duration;
        const currentTime = videoRef?.current?.currentTime;
        let progress: number = 0

        if(currentTime && length) {
            progress = length - (currentTime  ? currentTime : 0 );
        }

        let progress_formatted = Number(millisToMinutesAndSeconds(progress))
        // console.log('progress_formatted', progress_formatted)
        setProgress(progress_formatted)
    }

    return (
        <div className='relative'>
            <video
                onTimeUpdate={handleProgress}
                ref={videoRef}
                width="690px"
                height= "690px"
                // controls
                // poster={vid_poster}
            >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>

            <div className='absolute flex left-[30px] bottom-[30px]' >
                <button className='' onClick={togglePlay}>
                    {isPlaying ?
                        <img src={pause} alt='' className='w-[50px] h-[50px]' />
                        :
                        <img src={play} alt='' className='w-[50px] h-[50px]' />
                    }
                </button>

                <div className='ml-[30px]'>
                    <p className='font-medium text-[16px] text-white'>{progress}</p>
                    <h1 className='text-white text-[34px]'>History, Purposeand <br></br> and Usage</h1>
                </div>
            </div>

        </div>
    )
}

export default VideoPlayer;