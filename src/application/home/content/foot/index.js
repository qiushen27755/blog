import React from 'react';
import { Segment, Grid , Button} from 'semantic-ui-react';

function ContentFoot(){
    return(
        <Segment attached='bottom' >
            <Grid>
                <Grid.Column width={8}>
                    <Button basic color='teal' size='mini'>
                            上一页
                    </Button>
                </Grid.Column>
                <Grid.Column width={8} textAlign='right' >
                    <Button basic size='mini' color='teal'>
                            下一页
                    </Button>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}
export default ContentFoot