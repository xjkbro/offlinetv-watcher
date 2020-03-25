import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../view.css'
import OTV from '../assets/Offline_TV_Logo.png'
// import members from '../assets/members'

export default function Backdrop() {
    const [img, setImg] = useState('')

    const getRand = async () => {
        const result = await fetch('https://www.reddit.com/r/offlinetv/random.json')
        .then(res => res.json())
        return result;
    }
    useEffect(async () => {
        
        let result = await getRand();
        console.log(result)
        let path = result[0].data.children[0].data;
        let found = true;
        console.log(path.link_flair_css_class)
        while(found) {
            if(path.link_flair_css_class == "meme" ) {
                found = false;
                setImg(path.url)
                console.log(img)
            }
            else{
                result = await getRand();
                console.log(result)
                path = result[0].data.children[0].data;
            }
        }
    },[])
    
    return (
        <div>

            <Link to={{
                    pathname: "/offlinetv-watcher/",
                    state: {
                        name: 'offlinetv',
                        member: {
                            "name": "OfflineTV",
                            "twitch_name": "offlinetv",
                            "yt_url": "#",
                            "ig_url": "#",
                            "twitter_url": "#",
                            "web_url": "#"
                        }
                    }
                }}><img id="otvimg" src={OTV} /></Link>

            <div id="topBar" > </div>
            <div id="darkBar"> </div>
            <div id="yellowBar" > </div>
            <img id="bg" src={img}/>
            
            <div className="socialBar">
                
            </div>
        </div>
    )
}
