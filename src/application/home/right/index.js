import React from 'react';
import CardClassify from './classify'
import CardTags from './tags'
import CardRecommend from './recommend'
import {Divider,Header} from 'semantic-ui-react'
 function HomeCard(){
     return(
        <div >
            <CardClassify ></CardClassify>
            <CardTags></CardTags>
            <Divider horizontal><Header as='h4'>推荐</Header></Divider>
            <CardRecommend></CardRecommend>
            
        </div>
    )
}
export default HomeCard