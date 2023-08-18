import React from 'react'
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material";

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/people/1.jpeg" alt="" className="shareProfileImg" />
                <input placeholder='Want to say something?' className='shareInput' />
            </div>
            <hr className='shareline'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption"> 
                        <PermMedia htmlColor='DarkCyan' className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption"> 
                        <Label htmlColor='DarkCyan' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption"> 
                        <Room htmlColor='DarkCyan' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption"> 
                        <EmojiEmotions htmlColor='DarkCyan' className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share!</button>
            </div>
        </div>
    </div>
  )
}
