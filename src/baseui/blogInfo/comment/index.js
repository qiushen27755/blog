import React from 'react'

import {Segment,Comment,Form,Header,Button} from 'semantic-ui-react'

function BlogComment(){
    const { Group , Avatar , Content , Author , Metadata , Text, Actions, Action }=Comment
        // 总包       头像    内容       作者     meta信息   文本  辅助行为 具体标签/行为

    const {Field,TextArea,Input} = Form
    return(
       <Segment color='orange'>
           <Group>
                <Header as='h3' dividing>
                留言
                </Header>

                <Comment>
                    <Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                        <Content>
                                <Author as='a'>Matt</Author>
                                <Metadata>Today at 5:42PM</Metadata>

                                <Text>How artistic!</Text>
                                
                                <Actions>  
                                    <Action>回复</Action>
                                </Actions>
                        </Content>
                </Comment>

                <Comment>
                <Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    <Content>
                        <Author as='a'>Elliot Fu</Author>
                        <Metadata>
                        <div>Yesterday at 12:30AM</div>
                        </Metadata>
                        <Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                        </Text>
                        <Actions>
                        <Action>回复</Action>
                        </Actions>
                    </Content>
                        <Group>
                            <Comment>
                            <Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                            <Content>
                                <Author as='a'>Jenny Hess</Author>
                                <Metadata>
                                <div>Just now</div>
                                </Metadata>
                                <Text>Elliot you are always so right :)</Text>
                                <Actions>
                                <Action>回复</Action>
                                </Actions>
                            </Content>
                            </Comment>
                        </Group>
                </Comment>
                <Form reply >
                        <Field 
                        id='form-input-control-first-name'
                        control={TextArea}
                        placeholder='输入评论'
                        />
                    <Form.Group>
                        <Field 
                         id='form-input-control-first-name'
                         control={Input}
                         placeholder='姓名'/>
                        <Field 
                         id='form-input-control-first-name'
                         control={Input}
                         placeholder='邮箱'
                         error={false}
                         onChange={(e)=>console.log(e.target.value)}
                        />
                        <Field 
                         id='form-input-control-first-name'
                         control={Button}
                         content='回复'
                         icon='edit'
                         primary
                        />
                    </Form.Group>                    
                 </Form>
            </Group>
       </Segment>
    )
}
export default BlogComment