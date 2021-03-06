import React from 'react';
import {Grid,List,Icon,Image} from 'semantic-ui-react'
function BodyLine(){
    return(
        <Grid>
        <Grid.Column width={11}>
            <List horizontal link>
                <List.Item >
                    <Image src="https://i.picsum.photos/id/10/2500/1667.jpg" avatar/>
                        <List.Content>
                        <List.Header as='a' >邱仕隆</List.Header>
                        </List.Content>
                </List.Item>
                <List.Item>
                    <Icon name='calendar'/>{' '} 2018.02.28
                </List.Item>
                <List.Item>
                    <Icon name='eye'/>{' '} 3 
                </List.Item>
            </List>
          
        </Grid.Column>
        <Grid.Column width={5} floated='right' >
            
        </Grid.Column>
    </Grid>
    )
}
export default BodyLine