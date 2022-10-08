// Top level imports
import { ReactNode, ReactElement } from 'react';

// Semantic UI
import { Icon, Menu, Segment, Sidebar as SemSidebar } from 'semantic-ui-react';

// CSS
import './index.scss';

// PropTypes definition
interface IProps {
    contentSection: ReactNode | ReactNode[];
    visible?: boolean;
}

// Component definition
export default function Sidebar({
    contentSection,
    visible = false
}: IProps): ReactElement {
    return (
        <SemSidebar.Pushable as={Segment}>
            <SemSidebar
                as={Menu}
                icon='labeled'
                vertical
                visible={visible}
                width='thin'
                animation="overlay"
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
