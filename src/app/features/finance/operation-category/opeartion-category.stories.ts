import { HttpClientModule } from '@angular/common/http';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {
  AuditableOperationCategory
} from '@backend-models/finance/operationCategory';
import {
  Category,
  getGroupName
} from '@shared/utilities/storybook';
import {
  OperationCategoryComponent
} from './operation-category.component';
import { SharedModule } from '@shared/shared.module';
import {
  OperationCategoryServiceMock
} from '@shared/mocks/services/operation-category.mock.service';
import {
  OperationCategoryHandler
} from '@services/abstract/operationCategoryHandler';
import {
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';
import { AppConfig, RuntimeConfig } from 'src/app/app.config';
import { Logging } from '@services/abstract/logging';
import { LoggingMock } from '@shared/mocks/services/logging.mock.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const title = getGroupName(
  OperationCategoryComponent,
  Category.Screens);

export const getModuleMetadata = () => moduleMetadata({
  declarations: [
    OperationCategoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: Logging,
      useClass: LoggingMock
    },
    {
      provide: TimeoutConfiguration,
      useValue: RuntimeConfig
    },
    {
      provide: AppConfiguration,
      useValue: AppConfig
    },
    {
      provide: RuntimeConfiguration,
      useValue: RuntimeConfig
    },
    {
      provide: OperationCategoryHandler,
      useClass: OperationCategoryServiceMock
    }],
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
  } as AuditableOperationCategory,
};
