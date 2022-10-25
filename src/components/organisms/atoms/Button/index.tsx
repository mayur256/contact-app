// Top level imports
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

// Semantic UI
import { Button as SemanticButton, SemanticCOLORS } from 'semantic-ui-react';

// Props type definitions
interface IButtonProps extends ComponentPropsWithoutRef<typeof SemanticButton> {
    children: ReactNode;
    color?: SemanticCOLORS
}

// Component definition
export default function Button({
    children,
    color = 'green',
    ...rest
}: IButtonProps): ReactElement {
    return (
        <SemanticButton
            color={color}
            {...rest}
        >
            {children}
        </SemanticButton>
    );
};
