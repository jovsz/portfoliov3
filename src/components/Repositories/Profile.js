import React, {useState,useEffect} from 'react';
import {apiFollowers, apiFollowing} from './Api';
import { VscGithubInverted } from 'react-icons/vsc';
import { GoOrganization, GoPerson } from "react-icons/go";
import './Profile.css';

const Profile = (props) => {
    const [dataFollower, setDataFollower] = useState([]);
    const [dataFollowing, setDataFollowing] = useState([]);

    useEffect(async () => {
        await fetch(apiFollowers)
        .then((res) => res.json())
        .then((json) => {
            setDataFollower(json)
        })
        .catch(err => {
            console.log(err.message);
        })
        
        await fetch(apiFollowing)
        .then((res) => res.json())
        .then((json) => {
            setDataFollowing(json)
        })
        .catch(err => console.log(err.message))

    },[]);
    
    return(
        <div className="profile-container-github col-4">
            <img className="profile-github" src={props.avatar} alt={props.nickName} />
            <div className="profile-info">
                <p className="pb">{props.fullName}</p>
                <a className="github" href='https://github.com/jovsz' target="_blank"><p>{props.nickName}  <VscGithubInverted /></p></a>
                <div className='followers-container'>
                    <div className='pl'>
                        <GoOrganization /> 
                        <a>{dataFollower.length}</a>
                    </div>
                    <div className='pl'>
                        <GoPerson /> 
                        <a>{dataFollowing.length}</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;