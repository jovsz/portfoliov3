import React from 'react';
import { List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Repository = (props) => {

    return(
        <List className="list-repos" divided relaxed>
            {props.repository.map((repos) => (
                <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header as='a' href={repos.html_url} target='_blank'>{repos.name}</List.Header>
                        <List.Description as='a'>{repos.updated_at}</List.Description>
                    </List.Content>
                </List.Item>           
            ))}
        </List>            
    );
}

export default Repository;