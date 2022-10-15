// Top level imports
import { ReactElement, ReactNode, useContext } from 'react';

// App context
import { AppCtx } from '@/AppContext';

// Semantic UI
import { Icon, Segment, Sidebar } from 'semantic-ui-react';

// Props type definitions
interface IProps {
    visible?: boolean;
    children?: ReactNode | ReactNode[]
}

// CSS
import './index.scss';

// Component definition
export default function Drawer({
    visible = false,
    children
}: IProps): ReactElement {
    // global app context
    const appCtx = useContext(AppCtx);
    /** Handler function - starts */

    const closeDrawer = (): void => {
        appCtx?.toggleDrawer();
    }

    /** Handler function - ends */
    // Main JSX
    return (
        <Sidebar
            animation='overlay'
            direction='right'
            vertical
            visible={visible}
            width='very wide'
        >
            <Segment style={{ height: '100%', position: 'relative' }}>
                <Icon
                    name='close'
                    className='close-btn'
                    title='Close Drawer'
                    onClick={closeDrawer}
                />
                {children}    
           </Segment>
        </Sidebar>
    );
};
