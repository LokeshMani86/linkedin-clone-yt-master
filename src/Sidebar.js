import React from 'react'
import "./Sidebar.css";
import {Avatar} from '@material-ui/core';



function Sidebar() {
    const recentItem=(topic) =>(
        <div className="sidebar_recentItem">
        <span className='side_hash'>#</span>
        <p>{topic}</p>
        
        </div>


        )
    
    return (

        
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="./back.jpg" alt=''></img>
                <Avatar className="sidebar_avatar" />
                <h2>Lokesh Bhardwaj </h2>
                <h4>analyst.cloudarc@gmail.com </h4>
            </div>

            <div className="sidebar_stats">

                <div className="sidebar_stat">
                    <p>who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>views on post</p>
                    <p className="sidebar_statNumber">2,400</p>

                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('Program')}
                {recentItem('software')}
                {recentItem('design')}
                {recentItem('Developer')}
                
            </div>

        </div>

    )
}

export default Sidebar;
