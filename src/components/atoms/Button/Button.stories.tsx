// import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Button } from './index';

// Root object for the stories
export default {
    title: 'Atoms/Button',
    component: Button
} as ComponentMeta<typeof Button>;

type ButtonStory = ComponentStory<typeof Button>;

// Template for the stories
const StoryTemplate: ButtonStory = (args) => <Button {...args} />;

// Story objects
export const Primary: ButtonStory = StoryTemplate.bind({});
Primary.args = {
    primary: true,
    content: 'Primary'
};

export const BaseButton: ButtonStory = StoryTemplate.bind({});
BaseButton.args = {
    color: 'green',
    children: 'Base'
}

export const ButtonWithIcon: ButtonStory = StoryTemplate.bind({});
ButtonWithIcon.args = {
    info: true,
    icon: 'add',
    content: 'Add',
    labelPosition: '',
}
