import React from 'react'
import ContentHead from './head'
import ContentBody from './body'
import ContentFoot from './foot'
const count=[1,2,3]
function HomeContent(props){
     return(
        <div>
            <ContentHead></ContentHead>
            {
                count.map((i,j)=>{
                    return <ContentBody key={i} ></ContentBody>

                })
            }
            <ContentFoot></ContentFoot>
        </div>
    )
}
export default HomeContent