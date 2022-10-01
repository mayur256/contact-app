// Top level imports
import { ReactNode, ReactElement } from 'react';

// Semantic UI
import { Icon, Menu, Sidebar as SemSidebar } from 'semantic-ui-react';

// CSS
import './index.scss';

// PropTypes definition
interface IProps {
    contentSection: ReactNode | ReactNode[];
}

// Component definition
export default function Sidebar({
    contentSection
}: IProps): ReactElement {
    return (
        <SemSidebar.Pushable className='app-sidebar-container'>
            <SemSidebar
                as={Menu}
                icon='labeled'
                vertical
                visible={true}
                width='thin'
                className='app-sidebar'
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

            <SemSidebar.Pusher>
                {contentSection}
            </SemSidebar.Pusher>
        </SemSidebar.Pushable>
    )
};
