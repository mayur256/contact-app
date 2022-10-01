// Top level imports
import { ReactElement } from 'react';

// Semantic UI lib
// import { Grid } from 'semantic-ui-react';

// Atoms / Molecules / Organisms
import Sidebar from '@/components/organisms/Sidebar';
import MainSection from '@/components/organisms/MainSection';

// CSS
import './index.scss';

// Component definition
export default function Dashboard(): ReactElement {
    return (
        <div className='app-container'>
            <div className='app-dashboard'>
                <Sidebar
                    contentSection={<MainSection />}
                />
            </div>
        </div>
    )
};
