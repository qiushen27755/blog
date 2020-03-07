import React from 'react';
import {Segment,Grid,Menu,Label,Icon} from 'semantic-ui-react'
function CardClassify(){
    return(
        <Segment.Group>
        <Segment secondary>
            <Grid>
                <Grid.Column width={8} >
                    <Icon name='idea'/>分类
                </Grid.Column>
                <Grid.Column width={8}  textAlign='right'>
                <Icon link name='angle double right' />       
                </Grid.Column>
            </Grid>
        </Segment>
        <Segment color='teal'>
            <Menu vertical fluid>
                <Menu.Item as='a'>
                    <Label  pointing='left' color='teal'>5</Label><span>学习日志</span>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Label  pointing='left' color='teal'>5</Label><span>学习日志</span>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Label  pointing='left' color='teal'>5</Label><span>学习日志</span>
                </Menu.Item>
            </Menu>
        </Segment>
 </Segment.Group>
    )
}
export default CardClassify