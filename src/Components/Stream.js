import React from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import Social from "./Social"
import members from "../assets/members"

export default function Stream({match,location}) {
    // const [pokiThick, toastyboi, scawwa, goblin, fedzoned, crackhead, comfychu] = members.member
    console.log(location.pathname)
    let watch;
    if(location.pathname =="/offlinetv-watcher" || location.pathname == '/')
        watch = 'offlinetv'
    else
        watch = location.state.name
    return (
        <div>
            <div id="stream">
            <ReactTwitchEmbedVideo 
                channel={watch} 
                width="1031"
                height="565"
                layout="video"
                targetID='twitch-embed' 
            />
            </div>
            {location.pathname == "/" ? null :<Social info={location.state.member}/>}
            
        </div>
    )
}
