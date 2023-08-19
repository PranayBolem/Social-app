import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
        <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Ussop</b> and <b>3 other friends</b> have birthdays today!
            </span>
          </div>
           <img src="/assets/ad.png" alt="" className="rightbarAd" />
           <h4 className="rightbarTitle">Online Friends</h4>
           <ul className="rightbarFriendList">
             {Users.map((u) => (
              <Online key={u.id} user={u} />
             ))}
           </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
         <h4 className='rightBarTitle'>User information title</h4>
         <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Red Line</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">East Blue</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relation-ship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
         </div>
         <h4 className='rightBarTitle'>User friends</h4>
         <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src="/assets/people/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Vivi</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/people/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Vivi</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/people/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Vivi</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/people/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Vivi</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/people/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Vivi</span>
          </div>
          <div className="rightBarFollowing">
            <img src="/assets/people/3.jpeg" alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">Vivi</span>
          </div>
         </div>
      </>
     )
  }

  return ( 
    <div className='rightbar'>
        <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
