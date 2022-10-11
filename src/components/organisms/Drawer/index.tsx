// Top level imports
import { ReactElement, ReactNode } from 'react';

// Semantic UI
import { Segment, Sidebar } from 'semantic-ui-react';

// Props type definitions
interface IProps {
    visible?: boolean;
    children?: ReactNode | ReactNode[]
}

// Component definition
export default function Drawer({
    visible = false,
    children
}: IProps): ReactElement {
    // Main JSX
    return (
        <Sidebar
            animation='overlay'
            direction='right'
            vertical
            visible={visible}
            width='very wide'
        >
            <Segment style={{ height: '100%' }}>
                {children}    
           </Segment>
        </Sidebar>
    );
};
