// Top level imports
import { ReactElement } from 'react';

// Semantic UI
import { Segment, Header, Image } from 'semantic-ui-react';

// Component definition
export default function MainSection(): ReactElement {
    return (
        <Segment basic>
            <Header as="h3">ApplicationContent</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
    );
};
