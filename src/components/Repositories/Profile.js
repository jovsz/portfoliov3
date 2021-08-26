import React, {useState,useEffect} from 'react';
import {apiFollowers, apiFollowing, apiAvatar} from './Api';
import { Card, Icon, Image } from 'semantic-ui-react'
import './Profile.css';

const Profile = (props) => {
    const [dataFollower, setDataFollower] = useState([]);
    const [dataFollowing, setDataFollowing] = useState([]);
    const [dataAvatar, setDataAvatar] = useState('');

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

    const getAvatar = async() => {
        await fetch(apiAvatar)
        .then((res) => res.json())
        .then((json) => {
            setDataAvatar(json);
        })
    }

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
        getAvatar();
    },[]);
    
    return(
        <Card>
             <Image src={dataAvatar} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.nickName}</Card.Header>
                <Card.Header>{props.fullName}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>
                    <Icon name='users' />
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
            
        
    );
}

export default Profile;