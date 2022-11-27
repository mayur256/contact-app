import { ReactElement, SyntheticEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Subject Component
import { default as Input, InputType } from './index';

// Semantic UI
import { Icon } from 'semantic-ui-react';

// Root object for the stories
export default {
    title: 'Atoms/Input',
    component: Input,
    // argTypes: { onChange: {action: 'change'} },
} as ComponentMeta<typeof Input>;

type InputStory = ComponentStory<typeof Input>;

// Template for the stories
const StoryTemplate: InputStory = (args: InputType): ReactElement => {
    const [inputVal, setInputVal] = useState(args.value ?? '');

    const onInputChange = (e: SyntheticEvent<HTMLInputElement>): void => { 
        args.onChange(e);
        setInputVal((e.target as HTMLInputElement).value);
    };

    return (
        <Input
            {...args}
            onChange={onInputChange}
            value={inputVal}
        />
    )
};

export const BaseInput: InputStory = StoryTemplate.bind({});
BaseInput.args = {
    value: '',
};

export const InputWithIcon: InputStory = StoryTemplate.bind({});
InputWithIcon.args = {
    value: '',
    icon: <Icon
        name='search'
        link
    />
};
