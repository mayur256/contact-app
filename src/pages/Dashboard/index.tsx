// Top level imports
import { ReactElement, useState } from 'react';

// Semantic UI lib
import { Grid, Checkbox } from 'semantic-ui-react';

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
            <Grid.Column>
                <Checkbox
                    checked={visible}
                    label={'Visible'}
                    onChange={(e, data) => setVisible(Boolean(data.checked))}
                />
            </Grid.Column> 

            <Grid.Column className='app-container no-paddingX'>
                <Sidebar
                    visible={visible}
                    contentSection={<MainSection />}
                />
            </Grid.Column>
        </Grid>
        
    )
};
