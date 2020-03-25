import React from 'react'
import {Link} from 'react-router-dom'
import members from '../assets/members'


export default function Header() {
    console.log(members.member[1].twitch_name)

    const [poki, toast, scarra, yvonnie, fed, michael, lily] = members.member
    console.log(poki)
    
    return (
        <nav className="navbar justify-content-center" style={{marginTop: '-20px'}}>
            <li className="nav-item nav-link text-dark">
                <Link to={{
                    pathname: "/pokiThick",
                    state: {
                        name: poki.twitch_name,
                        member: poki
                    }
                }}> Pokimane </Link>
            </li>   
            <li className="nav-item nav-link">
                <Link to={{
                    pathname: "/toastyboi",
                    state: {
                        name: toast.twitch_name,
                        member: toast
                    }
                }}> DisguisedToast </Link>
            </li>
            <li className="nav-item nav-link">
                <Link to={{
                    pathname: "/scawwa",
                    state: {
                        name: scarra.twitch_name,
                        member: scarra
                    }
                }}> Scarra </Link>
            </li>   
            <li className="nav-item nav-link">
                <Link to={{
                    pathname: "/goblin",
                    state: {
                        name: yvonnie.twitch_name,
                        member: yvonnie
                    }
                }}> Yvonnie </Link>
            </li>   
            <li className="nav-item nav-link">
                <Link to={{
                    pathname: "/fedzoned",
                    state: {
                        name: fed.twitch_name,
                        member: fed
                    }
                }}> Fedmyster </Link>
            </li>
            <li className="nav-item nav-link">
                <Link to={{
                    pathname: "/crackhead",
                    state: {
                        name: michael.twitch_name,
                        member: michael
                    }
                }}> Michael Reeves </Link>
            </li>
            <li className="nav-item nav-link">
                <Link to={{
                    pathname: "/comfychu",
                    state: {
                        name: lily.twitch_name,
                        member: lily
                    }
                }}> LilyPichu </Link>
            </li>

        </nav>
    )
}
