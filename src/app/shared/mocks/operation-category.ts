import {
  OperationCategory
} from '@backend-models/finance/operationCategory';

export const getOperationCategoryArrayMock = (): OperationCategory[] => ([

]);

export const getOperationCategory = (): OperationCategory =>
  new OperationCategory('Food', '#FF5733');
