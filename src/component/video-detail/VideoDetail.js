import './videoDetail.css'
import React from 'react'
import ReactPlayer from 'react-player';
import { AiFillLike, AiFillDislike, AiOutlineDownload } from 'react-icons/ai';

import {FaShare} from 'react-icons/fa';
 const VideoDetail = () => {
     return (
        <div>
        <div className="video">
        <ReactPlayer  className="react-player " width="100%" height="100%" controls url="https://www.youtube.com/watch?v=f9SEs7UhFBs" />
        </div>
        <div className="video-header">
          <div className="video-stats">
            <h1 className="video-title">
              How to make Iced Latte እንኳን ደህና መጡ፡፡ ለመመዝገብ በስልክዎት ወደ 
            </h1>
            <p className="text-success mt-5 ">213332 Views</p>
          </div>

           <div className="nav-video">
     
        
         <a href="#"><AiFillLike/>1K</a>
           <a href="#"><AiFillDislike/>1.3K</a>
          <a href="#"><FaShare />Share</a>
            <a href="#"><AiOutlineDownload />Download</a>
          </div>
        </div>

        <div className="video-description">
          <img src="assets/img/user-profile.jpg" alt="User profile picture" />

          <div className="video-creator">
            <h2>Peaceful Cuisine</h2>

            <p className="published">Published 2 jul. 2015</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              temporibus illum corporis expedita, veritatis unde modi
              repellendus sint iure quibusdam natus. Rerum fuga placeat amet
              ratione cum temporibus aliquam laudantium!
            </p>

            <a href="" className="showmore-btn">show more</a>
          </div>

    
        </div>

             {//Comment
             }
        </div>
      
    )
}

export default VideoDetail;