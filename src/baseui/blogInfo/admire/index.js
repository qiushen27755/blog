import React from 'react'
import {Button,Popup} from 'semantic-ui-react'
function Admire(){
    return(
    <Popup trigger={<Button color='orange' icon='thumbs up outline' basic content='赞赏'/>} flowing hoverable>


    </Popup>
            
     )
}

export default Admire