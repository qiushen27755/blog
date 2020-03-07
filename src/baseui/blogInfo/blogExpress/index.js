//博客基本信息
import React from 'react'
import {Grid,List,Image,Popup} from 'semantic-ui-react'
function BlogExpress(){
    return(
        <Grid verticalAlign='middle'>
        <Grid.Column width={11}>
             <List>
                 <List.Item ><p>作者: 邱仕隆 (联系作者)</p></List.Item>
                 <List.Item ><p>发表时间: 201710-02 09.08</p></List.Item>
                 <List.Item ><p>版权声明: 自由转载-非商用-保持署名</p></List.Item>
                 <List.Item ><p>公众号转载: 请在文末添加作者公众号二维码</p></List.Item>
             </List>
        </Grid.Column>
        <Grid.Column width={5}>
        <Popup trigger={<Image src={require('../../../assets/adress/wechat.jpg')} floated='right'  rounded bordered 
                style={{width:'120px'}} />} flowing hoverable position='top center'>
            <Grid centered divided columns={2}>
                <Grid.Column>
                <Image src={require('../../../assets/adress/ding.jpg')} floated='right'  rounded bordered style={{width:'120px'}} />
                </Grid.Column>
                <Grid.Column>
                <Image src={require('../../../assets/adress/qq.jpg')} floated='right'  rounded bordered style={{width:'120px'}} />
                </Grid.Column>
            </Grid>
        </Popup>
            
        </Grid.Column>

    </Grid>
    )
}
export default BlogExpress