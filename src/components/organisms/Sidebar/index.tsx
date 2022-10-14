// Top level imports
import { ReactNode, ReactElement, useContext } from 'react';

// App context 
import { AppCtx } from '@/AppContext';

// Semantic UI
import { Icon, Menu, Sidebar as SemSidebar } from 'semantic-ui-react';

// Atoms / Molecules / Organisms
import Drawer from '../Drawer';

// CSS
import './index.scss';

// PropTypes definition
interface IProps {
    contentSection: ReactNode | ReactNode[];
    visible?: boolean;
    onHide: () => void
}

// Component definition
export default function Sidebar({
    contentSection,
    visible = false,
    onHide
}: IProps): ReactElement {
    // Global app context
    const appCtx = useContext(AppCtx);

    // Main JSX
    return (
        <SemSidebar.Pushable>
            <SemSidebar
                as={Menu}
                icon='labeled'
                vertical
                visible={visible}
                width='thin'
                animation="overlay"
                onHide={onHide}
            >
                <Menu.Item as='a'>
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad' />
                    Games
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera' />
                    Channels
                </Menu.Item>
            </SemSidebar>

            <Drawer visible={ appCtx?.showDrawer } />

            <SemSidebar.Pusher dimmed={visible}>
                {contentSection}
            </SemSidebar.Pusher>
        </SemSidebar.Pushable>
    )
};
