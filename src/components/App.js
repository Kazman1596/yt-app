import React, { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('San Holo')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className='ui container'>
            <SearchBar onTermSubmit={search} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList 
                            onVideoSelect={setSelectedVideo} 
                            videos={videos} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

//(video) => setSelectedVideo(video) === setSelectedVideo