import React from 'react';
import {Meta, Story} from '@storybook/react';
import HW12 from './HW12';
import {HW12Decorator} from '../../stories/HW12Decorator'


export default {
    title: 'HW12',
    component: HW12,
    decorators: [HW12Decorator]
} as Meta;

const Template: Story = () => <HW12/>;

export const HW12Example = Template.bind({})

export const SuperRadioExample = Template.bind({})
SuperRadioExample.args = {

}
