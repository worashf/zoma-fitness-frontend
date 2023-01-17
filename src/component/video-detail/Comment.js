import React from "react";
import './comment.css'
const Comment = () => {
  return (
    <div>
      <div className="video-comments">
        <div className="comment__stats">
          <p>554 Comments</p>
      
        </div>

        <div className="comment__box">
          <a href="" className="comment__display">
            <img src="assets/img/user-profile.jpg" alt="Profile picture" />
          </a>
          <input type="text" placeholder="Add a public comment" />
        </div>

        <div className="comment">
          <a className="comment__display" href="#">
            <img src="assets/img/user-profile.jpg" alt="Profile picture" />
          </a>
          <div className="comment__details">
            <h4 className="comment__author">
              John Doe <span>11 months ago</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              labore dolore consequuntur eum nemo ipsa. Magni aut assumenda
              dolores doloribus inventore, optio, nesciunt minima, repellendus
              praesentium esse placeat sint officia.
            </p>
            <div className="section__controls">
              <a href="#">
                <i className="fas fa-thumbs-up"></i>132
              </a>
              <a href="#">
                <i className="fas fa-thumbs-down"></i>
              </a>
              <a href="#">REPLY</a>
            </div>
            <a href="#">
              View 3 Replies <i className="fas fa-chevron-down chevron"></i>
            </a>
          </div>
        </div>
        <div className="comment">
          <a className="comment__display" href="#">
            <img src="assets/img/user-profile.jpg" alt="Profile picture" />
          </a>
          <div className="comment__details">
            <h4 className="comment__author">
              John Doe <span>11 months ago</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              labore dolore consequuntur eum nemo ipsa. Magni aut assumenda
              dolores doloribus inventore, optio, nesciunt minima, repellendus
              praesentium esse placeat sint officia.
            </p>
            <div className="section__controls">
              <a href="#">
                <i className="fas fa-thumbs-up"></i>132
              </a>
              <a href="#">
                <i className="fas fa-thumbs-down"></i>
              </a>
              <a href="#">REPLY</a>
            </div>
            <a href="#">
              View 3 Replies <i className=""></i>
            </a>
          </div>
        </div>
        <div className="comment">
          <a className="comment__display" href="#">
            <img src="assets/img/user-profile.jpg" alt="Profile picture" />
          </a>
          <div className="comment__details">
            <h4 className="comment__author">
              John Doe <span>11 months ago</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              labore dolore consequuntur eum nemo ipsa. Magni aut assumenda
              dolores doloribus inventore, optio, nesciunt minima, repellendus
              praesentium esse placeat sint officia.
            </p>
            <div className="section__controls">
              <a href="#">
                <i className="fas fa-thumbs-up"></i>132
              </a>
              <a href="#">
                <i className="fas fa-thumbs-down"></i>
              </a>
              <a href="#">REPLY</a>
            </div>
            <a href="#">
              View 3 Replies <i className="fas fa-chevron-down chevron"></i>
            </a>
          </div>
        </div>
       
     
      </div>
    </div>
  );
};

export default Comment;
