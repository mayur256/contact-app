// Top level imports
import { ComponentPropsWithRef, ReactElement, SyntheticEvent } from 'react';

// Semantic UI
import { Input as SemInput } from 'semantic-ui-react';

// Props type definition
export interface InputType extends ComponentPropsWithRef<typeof SemInput> {
    value: string;
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
};

// Component definiton
export default function Input({
    value,
    onChange,
    ...rest
}: InputType): ReactElement {
    return (
        <SemInput
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
};
