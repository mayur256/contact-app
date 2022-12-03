// Top level import
import { ComponentPropsWithoutRef, ReactElement, SyntheticEvent } from 'react';

// Semantic UI lib
import { Menu, Dropdown as SemDropdown, DropdownProps } from 'semantic-ui-react';

// Props type definition
type Option = {
    text: string,
    value: string | number | boolean | undefined
};
export interface IDropdownProps extends ComponentPropsWithoutRef<typeof SemDropdown>{
    options: Array<Option>;
    onChange: (event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
    text?: string;
};

// Component definition
export default function Dropdown({
    options,
    onChange,
    text,
    ...rest
}: IDropdownProps): ReactElement {
    // Main JSX
    return (
        <Menu compact className='sort-menu'>
            <SemDropdown
                onChange={onChange}
                text={text}
                options={options}
                {...rest}
            />
        </Menu>
    )
};
