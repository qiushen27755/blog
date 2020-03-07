import React  from 'react'

import { Input, Header, Icon, Segment ,Menu ,Container, Button} from 'semantic-ui-react'

import { renderRoutes } from "react-router-config";
import {  NavLink } from 'react-router-dom';

// import BackContent from '../../assets/image/bg2.jpeg'
function BlogHeader(props){
    const {route}=props

    const Item=Menu.Item
     return(
                 <Segment attached  >
                    {/* <Container  textAlign='left' > */}
                            <Menu  secondary stackable >
                                <Item>
                                    <Header as={NavLink} to='/home' color='teal' position='left' > 
                                        <span>Semantic Blog</span>
                                    </Header>
                                </Item>
                                    <Item as={NavLink} to='/home'  activeClassName="selected" ><Icon  color='grey' name='home' /><span>首页</span></Item>
                                    <Item as={NavLink} to='/idea'  activeClassName="selected" ><Icon  color='grey' name='idea' /><span>分类</span></Item>
                                    <Item as={NavLink} to='/record' activeClassName="selected" ><Icon color='grey' name='clone' /><span>归档</span></Item>
                                    <Item as={NavLink} to='/tags'  activeClassName="selected" ><Icon  color='grey' name='tags' /><span>标签</span></Item>
                                    <Item as={NavLink} to='/about'  activeClassName="selected" ><Icon color='grey' name='info' /><span>关于我</span></Item>
                                    {/*搜索框 */}
                                    <Menu.Menu   position='right'>
                                        <Item >
                                            <Input  transparent icon='search' type='text' placeholder='Search...' />
                                        </Item>
                                    </Menu.Menu>
                            </Menu>
                        {/* </Container> */}
                        {/* <Button icon color='black' style={{position:'absolute',top:'0',right:'0'}}> 
                            <Icon  name='sidebar' />
                        </Button> */}
                        <Container >

                        { renderRoutes(route.routes )}
                        </Container>
            </Segment>
      )
}
export default BlogHeader