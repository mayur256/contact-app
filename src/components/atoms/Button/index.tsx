// Top level imports
import { ComponentPropsWithoutRef, ReactElement, ReactNode, useRef } from 'react';

// react-aria
import { useButton } from 'react-aria';

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
    const ref = useRef(null);
    const { buttonProps } = useButton({}, ref);

    return (
        <SemanticButton
            {...buttonProps}        
            ref={ref}
            color={color}
            {...rest}
        >
            {children}
        </SemanticButton>
    );
};
