import React, { useEffect, useState } from 'react';
import News from './News';

export default function Main({ data }) {
    data = data.slice(0, 50);
    return (
        <div className='main-container' >
            {
                data.map((d, ind) => {
                    let desc = (d.description.length < 200) ? d.description : d.description.slice(0, 200) + "...";
                    return d.urlToImage ? <News key={ind} title={d.title} url={d.url} description={desc} urlToImage={d.urlToImage} content={d.content} /> : <></>
                })
            }
        </div>
    );
}