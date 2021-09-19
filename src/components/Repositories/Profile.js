import React, {useState,useEffect} from 'react';
import {apiFollowers, apiFollowing } from './Api';
import { Card, Icon, Image } from 'semantic-ui-react'
import './Profile.css';

const Profile = (props) => {
    const [dataFollower, setDataFollower] = useState([]);
    const [dataFollowing, setDataFollowing] = useState([]);

    const getFollowing = async() => {
        await fetch(apiFollowers)
        .then((res) => res.json())
        .then((json) => {
            setDataFollower(json)
        })
        .catch(err => {
            console.log(err.message);
        })
    };

    const getFollower = async() => {
        await fetch(apiFollowing)
        .then((res) => res.json())
        .then((json) => {
            setDataFollowing(json)
        })
        .catch(err => console.log(err.message))
    };

    useEffect(() => {
        getFollower();
        getFollowing();
    },[]);
    
    return(
        <div className="Github-container">
            <Card>
                <Image src={props.avatar} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.fullName}</Card.Header>
                    <Card.Header >{props.nickName}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2020</span>
                    </Card.Meta>
                    <Card.Description>
                    All our dreams can come true, if we have the courage to pursue them.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <p>
                        <Icon name='zip' />
                        {props.repos.length} Repositories
                    </p>
                </Card.Content>
                <Card.Content extra>
                    <p>
                        <Icon name='users' />
                        {dataFollower.length} Followers
                    </p>
                </Card.Content>
                <Card.Content extra>
                    <p>
                        <Icon name='user' />
                        {dataFollowing.length} Friends
                    </p>
                </Card.Content>
            </Card>
        </div>
    );
}

export default Profile;