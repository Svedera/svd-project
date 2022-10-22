import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {
  OperationCategory
} from '@backend-models/finance/operationCategory';
import {
  Category,
  getGroupName
} from '@shared/utilities/storybook';
import {
  OperationCategoryComponent
} from './operation-category.component';
import { SharedModule } from '@shared/shared.module';

const title = getGroupName(
  OperationCategoryComponent,
  Category.Screens);

export const getModuleMetadata = () => moduleMetadata({
  declarations: [
    OperationCategoryComponent
  ],
  imports: [
    SharedModule
  ],
})

export default {
  component: OperationCategoryComponent,
  title: title,
  excludeStories: /.*Metadata$/,
  decorators: [
    getModuleMetadata()
  ]
} as Meta;


const Template: Story = args => ({
  props: args
});

export const Add = Template.bind({});

export const Edit = Template.bind({});
Edit.args = {
  operationCategory: {
    name: 'Food',
    color: '#FF5733'
  } as OperationCategory,
};
