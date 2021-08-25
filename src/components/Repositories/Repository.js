import React from 'react';
import { List, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { VscGithubInverted } from 'react-icons/vsc';

const Repository = (props) => {
    return(
        <div className="repos">
          <List divided relaxed>
             {props.repository.map((repos) => (
                    <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a' href={repos.html_url} target='_blank'>{repos.name}</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>           
                ))}
            </List>            
        </div>
    );
}

export default Repository;