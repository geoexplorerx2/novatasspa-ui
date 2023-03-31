import React, { useState, useRef, useEffect } from 'react';
import play from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.png';
import vid_poster from '../../assets/images/vid_poster.png';

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [progress, setProgress] = useState('');

    const togglePlay = () => {
        if (isPlaying) {
            videoRef?.current?.pause();
        } else {
            videoRef?.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    function secondsToMinutes(seconds: number) {
        let minutes = Math.floor(seconds / 60);
        let remaining_seconds = (seconds % 60).toFixed();

        return (
            seconds === 60 ?
                minutes + ":00"
                :
                (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" : "") + remaining_seconds
        )
    }


    const handleProgress = () => {
        const length = videoRef?.current?.duration;
        const currentTime = videoRef?.current?.currentTime;
        // let progress_unformatted: number = 0
        let progress_unformatted;

        if (length) {
            progress_unformatted = length - (currentTime ? currentTime : 0);
            setProgress(secondsToMinutes(progress_unformatted))
        }

    }


    useEffect(() => {
        handleProgress()
    },)

    return (
        <div className='relative w-[690px] h-[690px]'>
            <video
                onTimeUpdate={handleProgress}
                ref={videoRef}
                // width="690px"
                // height="690px"
                // controls
                poster={vid_poster}
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
                    <p className='font-medium text-[16px] text-white font-poppins'>{progress ? progress : '9:56'}</p>
                    <h1 className='text-white text-[34px] font-gotu'>History, Purpose <br/> and Usage</h1>
                </div>
            </div>

        </div>
    )
}

export default VideoPlayer;