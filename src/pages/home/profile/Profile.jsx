import React from 'react'
import "./profile.css"
import Topbar from '../../../components/topbar/Topbar';
import Leftbar from '../../../components/leftbar/Leftbar';
import Feed from '../../../components/feed/Feed';
import Rightbar from '../../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Leftbar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/posts/6.jpeg" alt="" className="profileCoverImg" />
                        <img src="/assets/people/1.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Nami</h4>
                        <span className="profileInfoDesc">Dai kaizoku jidai!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
</>
  )
}
