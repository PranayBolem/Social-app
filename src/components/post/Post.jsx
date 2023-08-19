import React, { useState } from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'

export default function Post({Post}) {
    const[like,setLike] = useState(Post.like)
    const[isLiked, setIsLiked] = useState(false)
 
    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked) 
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id === Post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername"> {Users.filter(u=>u.id === Post.userId)[0].username} </span>
                    <span className="postDate"> {Post.date} </span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{Post?.desc} </span>
                <img className='postImg' src={Post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="/assets/heart.png" onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="/assets/like.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">
                        {like} people like it! 
                    </span>
                </div>
                <div className="postBottomRight"> 
                    <span className="postCommentText">{Post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
