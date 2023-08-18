import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/people/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">shirahoshi</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey its my first post :)</span>
                <img className='postImg' src="/assets/posts/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/heart.png" alt="" />
                    <img className='likeIcon' src="/assets/like.png" alt="" />
                    <span className="postLikeCounter">
                        50 people like it! 
                    </span>
                </div>
                <div className="postBottomRight"> 
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
