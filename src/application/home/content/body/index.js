import React from 'react';
import {Segment,Grid,Header,Image} from 'semantic-ui-react'
import BodyLine from './line'
import { Link } from 'react-router-dom';

 //文章内容的列表
function ContentBody(props){
   
    return(
        <Segment  attached>
            <Segment padded vertical>
                <Grid  reversed='mobile vertically' stackable columns={2} >
                    {/* 正文标题和内容*/}
                    <Grid.Column   width={11}>
                             <Header as={Link} to={`/blogInfo/${'aa'}`} >你真的理解什么是财富自由吗</Header>
                              
                                <p></p>
                             <p>正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，
                                 我们很多人很多时候根本没有对正确目标的定义,甚至根本从来没有想过,
                                 只是大家都这么做而已...</p>
                              
                        {/**底部便签 */}
                        <BodyLine></BodyLine>
                    </Grid.Column>
                    
                        {/**右边的配图 */}
                        <Grid.Column width={5}>
                            <Image
                                src="https://i.picsum.photos/id/10/2500/1667.jpg"
                                as={Link} to={`/blogInfo/${'aa'}`} size='medium'
                                href='#'
                                target='_self' rounded
                            />
                        </Grid.Column>
                </Grid>
            </Segment>
    </Segment>
    )
}
export default ContentBody