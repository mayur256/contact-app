// Top level imports
import { createContext, ReactElement, ReactNode, useState } from 'react';

// App context type definition
export interface IAppCtx {
    showDrawer: boolean;
    toggleDrawer: () => void;
}

// Props type definition
export interface IProps {
    children: ReactNode | ReactNode[];
}

// Create App Context 
export const AppCtx = createContext<IAppCtx | null>(null);

// Component definition
export const AppContext = ({ children }: IProps): ReactElement => {
    // Global state that can be used throughout the application
    const [appCtx, setAppCtx] = useState<IAppCtx>({
        showDrawer: false,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        toggleDrawer
    });

    // toggle drawer visibility
    function toggleDrawer(): void {
        setAppCtx((prevState: IAppCtx): IAppCtx => {
            return {
                ...prevState,
                showDrawer: !prevState.showDrawer
            };
        });
    }

    // Main JSX
    return (
        <AppCtx.Provider value={appCtx}>
            {children}
        </AppCtx.Provider>
    )
};
