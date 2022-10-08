// Top level imports
import { ReactElement, useState } from 'react';

// Semantic UI lib
import { Grid } from 'semantic-ui-react';

// Atoms / Molecules / Organisms
import Sidebar from '@/components/organisms/Sidebar';
import MainSection from '@/components/organisms/MainSection';

// CSS
import './index.scss';

// Component definition
export default function Dashboard(): ReactElement {
    // state declarations
    const [visible, setVisible] = useState<boolean>(false);

    // Main JSX
    return (
        <Grid container columns={1}>
            <Grid.Column className='no-padding app-container'>
                <Sidebar
                    visible={visible}
                    onHide={() => setVisible(false)}
                    contentSection={
                        <MainSection
                            openSidebar={(): void => setVisible(true)}
                        />
                    }
                />
            </Grid.Column>
        </Grid>
        
    )
};
