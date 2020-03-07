import React from 'react';
import { Segment,Grid,Icon,Label} from 'semantic-ui-react'
function CardTags(){
    return(
        <Segment.Group>
            <Segment secondary>
                <Grid>
                    <Grid.Column width={8} >
                        <Icon name='tags'/>标签
                    </Grid.Column>
                    <Grid.Column width={8}  textAlign='right'>
                        <Icon link name='angle double right' />       
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment color='teal'>
                <Label as='a' basic pointing='left' color='teal'>
                    方法论 <Label.Detail>14</Label.Detail></Label>
            </Segment>
        </Segment.Group>   
    )
}
export default CardTags