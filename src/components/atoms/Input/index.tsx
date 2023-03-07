// Top level imports
import {
    ComponentPropsWithRef, ReactElement, SyntheticEvent, useRef, forwardRef, Ref
} from 'react';

// react-aria
import { useTextField } from 'react-aria';
// eslint-disable-next-line no-duplicate-imports
import type { AriaTextFieldProps } from 'react-aria';

// Semantic UI
import { Input as SemInput } from 'semantic-ui-react';

// Props type definition
export interface InputType extends ComponentPropsWithRef<typeof SemInput & AriaTextFieldProps> {
    value: string;
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
};

const SemInputWrapper = forwardRef(function SemInputWrapper(props: InputType, ref: Ref<SemInput>): ReactElement {
    return <SemInput {...props} ref={ref} />
});

// Component definiton
export default function Input({
    value,
    onChange,
    ...rest
}: InputType): ReactElement {
    const ref = useRef(null);
    const { inputProps } = useTextField({}, ref);
    return (
        <SemInputWrapper
            {...inputProps}
            ref={ref}
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
};
