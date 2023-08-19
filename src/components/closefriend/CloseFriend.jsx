import React from 'react'
import "./closefriend.css"

export default function CloseFriend({user}) {
  return (
    <div>
        <li className="leftbarFriend">
            <img className="leftbarFriendImg" src={user.profilePicture} alt="" />
            <span className="leftbarFriendName"> {user.username} </span>
        </li>
    </div>
  )
}
