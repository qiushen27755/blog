import React,{useState} from 'react'
import { Segment,Container ,Message ,Image ,Label,Header  ,Button } from 'semantic-ui-react'
import BodyLine from '../../application/home/content/body/line'
import BlogExpress from '../../baseui/blogInfo/blogExpress'
import BlogComment from '../../baseui/blogInfo/comment'
import Contents from './content'
function BlogInfo(){
    const [open,setOpen]=useState(true)
     return(
        <Container text={open}   >
            <Segment attached='top'  >
            <BodyLine ></BodyLine>
            </Segment>
            <Segment attached >
            <Image src="https://unsplash.it/800/450?image=1005" fluid/>
            </Segment>
            <Segment attached padded>
                     <Label color='orange' ribbon='right'>原创</Label>
                 
             
                <Button icon={open ?'world':'book'}
                onClick={()=>setOpen(!open)} circular
                />
              
                <Header as='h2' textAlign='center' >关于可以练习的清单</Header>
                     <Contents />

                 <Label   content='方法论' ribbon='right' /> 
                <Segment textAlign='center' basic >
                <Button color='orange' icon='thumbs up outline' basic content='赞赏'/>
                </Segment>
             </Segment>
            <Message positive attached  color='orange'>
                    <BlogExpress />
            </Message>
            <Segment attached='bottom'>
                <BlogComment />
                
            </Segment>
            
        </Container>
    )
}
export default BlogInfo;