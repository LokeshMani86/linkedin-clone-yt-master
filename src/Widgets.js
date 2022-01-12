import React from 'react';
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';


function Widgets() {
    const newsArticle = (heading, subtitle) => (

        <div className='widgets_article'>
        
        <div className='widgets_article_Left'>
        <FiberManualRecordIcon/>
        
        <div className='widgets_article_Right'>
        <h4> {heading}  </h4>
        <p>  {subtitle}</p>
        </div>
        </div>
        </div>
    )
    return (
        <div className='widgets'>
        <div className='widgets_header'>
         <h2> NEWS    </h2>  
         <InfoIcon/>
            </div>
            {newsArticle ("Fed survey finds economy growing modestly despite COVID", "The Federal Reserve said Wednesday that the economy was growing at a modest pace at the end of 2021 but was still being held back by ongoing supply-chain disruptions and labor shortages")}
            {newsArticle ("Iran, Venezuela and Sudan lose UN voting rights with 5 more", "Iran, Venezuela and Sudan are in arrears on paying dues to the United Nations")}
            {newsArticle ("Booms and a bubble: How supernovas shaped our galactic neighborhood", "The origin story of our galactic neighborhood just got a little clearer.")}
        
            </div>

    );
}

export default Widgets
