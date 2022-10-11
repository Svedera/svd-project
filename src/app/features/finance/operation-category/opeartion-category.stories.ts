import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';
import { OperationComponent } from '../operation/operation.component';
import { OperationCategory } from '@backend-models/finance/operationCategory';


export default {
  component: OperationComponent,
  title: 'Task',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Add = Template.bind({});

export const Edit = Template.bind({});
Edit.args = {
  operationCategory: {
    name: 'Food',
    color: '#FF5733'
  } as OperationCategory,
};
