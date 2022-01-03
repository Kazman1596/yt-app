import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    const videoTitle = video.snippet.title.replaceAll('&#39;', "'")

    return (
        <div onClick={() => onVideoSelect(video)} className='video-item item'>
            <img 
                className='ui image' 
                key={video.videoId} 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} 
            />
            <div className='content'>
                <div className='header'>{videoTitle}</div>
            </div>
        </div>
    )
}

export default VideoItem