import React, { useState, useRef } from 'react';

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef?.current?.pause();
        } else {
            videoRef?.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <video
                ref={videoRef}
                width="690px"
                height="690px"
                // controls
            >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    )
}

export default VideoPlayer;