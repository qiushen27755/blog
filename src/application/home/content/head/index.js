import React from 'react'
import {Segment,Grid,Header} from 'semantic-ui-react'
//标题头
function ContentHead(){
    return(
        <Segment  attached>
            <Grid columns={2}>
                <Grid.Column  >
                    <Header as='h3' color='teal'>博客 </Header>
                </Grid.Column>
                <Grid.Column  textAlign='right'>
                    共  <Header as='h2' color='orange' style={{display: 'inline-block'}}> 14 </Header>  篇
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default ContentHead;