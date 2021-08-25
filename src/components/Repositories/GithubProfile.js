import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import {api,apiFollowers, apiFollowing, apiRepos} from './Api';
import Repository from './Repository';
import './Repositories.css';

const GithubProfile = () => {
    const [data, setData] = useState([]);
    const [dataRepository, setDataRepos] = useState([]);

    useEffect(async() => {
        await fetch(api)
        .then((res) => res.json())
        .then((json) => {
            setData(json)
        }).catch((err) => {console.log(err.message)});

        await fetch(apiRepos)
        .then((res) => res.json())
        .then((json) => {
            setDataRepos(json)
            console.log(json)
        }).catch((err) => {console.log(err.message)});
    },[])


    return(
        <div className="repository-container">
            <h2>Github Repositories</h2>
            <div className='github-container'>
                <Profile nickName={data.login} fullName={data.name} avatar={data.avartar_url} url={data.url} />
                <Repository repository={dataRepository} />
            </div>
            
        </div>
    )
}

export default GithubProfile;