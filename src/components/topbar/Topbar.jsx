import React from "react"
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { UserButton } from "@clerk/clerk-react";


export default function Topbar(){
    return(
        <div className="TopbarContainer">
            <div className="logout">
                <UserButton />
            </div>

            <div className="topbarLeft">
            <a href="/" className="underline">
            <span className="logo">Konnect</span>
            </a>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for Friends, videos or posts " className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <a href="/profile">
                    <img src="/assets/people/1.jpeg" alt="" className="topbarImg"/>
                </a>
            </div>
        </div>
    )
}