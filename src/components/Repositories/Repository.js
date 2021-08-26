import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Repository = (props) => {
    return(
          <List className="list-repos" divided relaxed>
             {props.repository.map((repos) => (
                    <List.Item>
                        <Icon name='github' />
                        <List.Content>
                            <List.Header as='a' href={repos.html_url} target='_blank'>{repos.name}</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>           
                ))}
            </List>            
    );
}

export default Repository;