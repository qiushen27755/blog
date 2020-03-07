import React from 'react';
import {Segment,Grid,Icon}  from 'semantic-ui-react'
function CardRecommend(){
    return(
        <Segment.Group>
            <Segment>
                <Grid>
                    <Grid.Column width={8} >
                        <Icon name='bookmark'/>最新推荐
                    </Grid.Column>
                    <Grid.Column width={8}  textAlign='right'>
                    <Icon link name='angle double right' />       
                    </Grid.Column>
                </Grid>
            </Segment>
             <Segment> <a href='https://www.baidu.com'  style={{color:'#333'}}>用户故事</a></Segment>{/**target='_blank' */}
        </Segment.Group>
    )
}
export default CardRecommend