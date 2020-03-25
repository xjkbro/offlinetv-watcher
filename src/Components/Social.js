import React from 'react'

import yt from '../assets/youtube.png'
import ig from '../assets/instagram.png'
import tw from '../assets/twitter.png'
import web from '../assets/website.png'


export default function Social(props) {
    const info = props.info
    return (
        <div id="social">
            <ul>
                <li><a href={info.web_url}><img src={web} alt="Website" /></a></li>
                <li><a href={info.ig_url}><img src={ig} alt="Instagram" /></a></li>
                <li><a href={info.twitter_url}><img src={tw} alt="Twitter" /></a></li>
                <li><a href={info.yt_url}><img src={yt} alt="YouTube" /></a></li>
            </ul>
        </div>
    )
}
