import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import {api, apiRepos} from './Api';
import Repository from './Repository';
import './Repositories.css';

const GithubProfile = () => {
    const [data, setData] = useState([]);
    const [dataRepository, setDataRepos] = useState([]);

    const getRepos = async () => {
        await fetch(apiRepos)
        .then((res) => res.json())
        .then((json) => {
            setDataRepos(json)
            console.log(json)
        }).catch((err) => {console.log(err.message)});
    }

    const getProfile = async () => {
        await fetch(api)
        .then((res) => res.json())
        .then((json) => {
            setData(json)
        }).catch((err) => {console.log(err.message)});
    };

    useEffect(() => {
      getRepos();
      getProfile();    
    },[])


    return(
        <div className="repository-container">
            <h2>Github Repositories</h2>
            <div className='github-container'>
                <Profile nickName={data.login} fullName={data.name} url={data.url} avatar={data.avatar_url} repos={dataRepository} />
                <Repository repository={dataRepository} />
            </div> 
        </div>
    )
}

export default GithubProfile;