import React from 'react';
import ReactTimeAgo from 'react-time-ago';


import '../Styles/Card.css'


function Card(props) {

    let {title,thumbnails,channelTitle,publishedAt}=props.card_data;
    return (
        <div className='wrap_card'>
            <div className="card_image">
                <img src={thumbnails?.medium?.url || thumbnails?.high?.url } alt="..." />
            </div>
            <div className="card_disc">
                <div className="card_data">
                    <div className='card_title'>{title}</div>
                    <div className='card_creater'>by <strong>{channelTitle}</strong></div>
                    <ReactTimeAgo date={publishedAt} locale="en-US"/>
                </div> 
            </div>
        </div>
    );
}

export default Card;
