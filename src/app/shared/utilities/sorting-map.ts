import { SortingOrder } from '@enums/sortingType';

export const SortingOrderChangeMap: Map<SortingOrder, SortingOrder>
  = new Map()
    .set(SortingOrder.Default, SortingOrder.Ascendant)
    .set(SortingOrder.Ascendant, SortingOrder.Descendant)
    .set(SortingOrder.Descendant, SortingOrder.Default)
    .set(SortingOrder.None, SortingOrder.None);

export const SortingOrderIconMap: Map<SortingOrder, string | null>
  = new Map()
    .set(SortingOrder.Default, 'sort')
    .set(SortingOrder.Ascendant, 'sort-up')
    .set(SortingOrder.Descendant, 'sort-down')
    .set(SortingOrder.None, null);
