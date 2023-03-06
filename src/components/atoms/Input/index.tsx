// Top level imports
import { ComponentPropsWithRef, ReactElement, SyntheticEvent, useRef } from 'react';

// react-aria
import { useTextField } from 'react-aria';

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
    const ref = useRef(null);
    const { inputProps } = useTextField({}, ref);

    return (
        <SemInput
            ref={ref}
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
};
