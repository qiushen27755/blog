import React from 'react'
import { List, Grid, Divider, Header,Segment ,Container,Image} from 'semantic-ui-react'

function BlogFooter(){
    return(
             <Segment     vertical>
                <Container textAlign='center'>

                        <Grid stretched stackable  padded   divided>
                                <Grid.Column width={3}>
                                    <Image src='https://i.picsum.photos/id/1015/6000/4000.jpg' size='small' rounded/>
                                </Grid.Column>
                                {/**List */}
                                <Grid.Column width={3}>
                                    <Header as='h4'   ><span>最新博客</span></Header>
                                    <List    link>
                                        <List.Item as='a'>如何做一个博客</List.Item>
                                        <List.Item as='a'>如何做一个博客</List.Item>
                                        <List.Item as='a'>如何做一个博客</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Header as='h4'   > <span>联系我</span></Header>
                                    <List    link>
                                        <List.Item as='a'>Email:qiu502639753@163.com</List.Item>
                                        <List.Item as='a'>5026397853</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Header as='h4'   > <span>介绍</span></Header>
                                    <List    link>
                                        <List.Item as='a'>
                                        <p>很多教程都把 React 作为一个 UI 库来引入。这是很有道理的，因为 React 本身就是一个 UI 库。就像官网上所说的那样。</p>
                                        </List.Item>
                                     </List>
                                </Grid.Column>
                            </Grid>
                            <Divider section />
                            <p style={{color:'grey'}}>浙江省杭州市 邱仕隆 制作于 10023</p>
                 </Container>
             </Segment>
     )
}
export default BlogFooter