import React from 'react';

import { ComponentStory } from '@storybook/react';

import { default as Button } from './index';

// Root object for the stories
export default {
    title: 'Atoms/Button',
    component: Button
};

// Template for the stories
const StoryTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Story objects
export const Primary = StoryTemplate.bind({});
Primary.args = {
    primary: true,
    content: 'Primary'
};

export const BaseButton = StoryTemplate.bind({});
BaseButton.args = {
    color: 'green',
    children: 'Base'
}

export const ButtonWithIcon = StoryTemplate.bind({});
ButtonWithIcon.args = {
    info: true,
    icon: 'add',
    content: 'Add',
    labelPosition: '',
}
