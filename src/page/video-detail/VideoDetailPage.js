

import React from 'react'
import VideoDetail from '../../component/video-detail/VideoDetail';
import Comment from '../../component/video-detail/Comment';
import SideVideo from '../../component/video-detail/SideVideo'
    
const VideoDetailPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-7">
                <VideoDetail />
                <Comment />
            
                </div>
                <div className="col-lg-5">
                <SideVideo/>
         </div>
         
            </div>
           
        </div>
    )
}

export default VideoDetailPage;