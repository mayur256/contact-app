// Top level imports
import { ReactElement } from 'react';

// Pages Components
import Dashboard from './pages/Dashboard';

// App Context Provider Component
import { AppContext } from './AppContext';

// Component definition
function App(): ReactElement {
  return (
    <AppContext>
      <Dashboard />
    </AppContext>
  );
}

export default App;
