import { Meta, Story } from '@storybook/angular';

import { Category, getGroupName } from '@shared/utilities/storybook';
import { OperationComponent } from './operation.component';

const title = getGroupName(
  OperationComponent,
  Category.Screens);


export default {
  component: OperationComponent,
  title: title,
  excludeStories: /.*Metadata$/
} as Meta;


const Template: Story = args => ({
  props: args
});

export const Add = Template.bind({});

