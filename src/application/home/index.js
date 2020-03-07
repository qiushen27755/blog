import React from 'react'
import {Grid} from 'semantic-ui-react'
import {renderRoutes} from 'react-router-config'
import BlogFooter from '../../component/footer'
import HomeHead from './content'
import HomeCard from './right'
import BackContent from '../../assets/image/bg2.jpg'

function BlogHome(props){
     
     return(
        <div>
        {/* <Segment > */}
             {/* style={{backgroundImage: `url(${BackContent})`}} */}
                <br />
                {/* <Container> */}
                    <Grid stackable >


                    <Grid.Column width={3}>
                        <HomeCard  ></HomeCard>
                    </Grid.Column>


                    {/**首页博客主题 */}
                    <Grid.Column width={9}>
                        <HomeHead  ></HomeHead>
                    </Grid.Column>
                        

                        {/**博客标签/广告/整理 */}
                        <Grid.Column width={4}>
                            {/**分类 */}
                            <HomeCard></HomeCard>
                        </Grid.Column>
                    </Grid>
                {/* </Container> */}
             {/* </Segment> */}
           
            <BlogFooter></BlogFooter>
            {renderRoutes(props.route.routes) }
        </div>
     )
}
export default BlogHome