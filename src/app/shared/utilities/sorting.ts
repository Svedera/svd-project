export type GetProperty<T, P> = (object: T) => P | null;

export type CompareFunction<T> =
  (objectA: T, objectB: T, ascending: boolean) => number;

export type SortObjectProperty =
  <T, P>(getProperty: (object: T) => P) => (
    objectA: T,
    objectB: T,
    ascending: boolean) => number;

export const sortObjectNumberField =
  <T>(getProperty: (object: T) => number | null | undefined) => (
    objectA: T,
    objectB: T,
    ascending: boolean) => {

    const numberA = getProperty(objectA);
    const numberB = getProperty(objectB);

    if (ascending) {
      return sortNumberAscending(numberA, numberB);
    } else {
      return sortNumberDescending(numberA, numberB);
    }
  };

export const sortNumberAscending = (
  numberA: number | null | undefined,
  numberB: number | null | undefined): number => {

  const delta = numberB! - numberA!;
  if (delta > 0) {
    return -1;
  }
  if (delta < 0) {
    return 1;
  }
  return 0;
};

export const sortNumberDescending = (
  numberA: number | null | undefined,
  numberB: number | null | undefined): number => {

  if (numberA == null) { return 1 }
  if (numberB == null) { return -1 }

  const delta = numberB - numberA;
  if (delta > 0) {
    return 1;
  }
  if (delta < 0) {
    return -1;
  }
  return 0;
};

export const sortObjectStringField =
  <T>(getProperty: (object: T) => string | null | undefined) => (
    objectA: T,
    objectB: T,
    ascending: boolean): number => {

    const lowerA = getProperty(objectA);
    const lowerB = getProperty(objectB);

    if (ascending) {
      return sortStringAscending(lowerA, lowerB);
    } else {
      return sortStringDescending(lowerA, lowerB);
    }
  };

export const sortStringAscending = (
  stringA: string | null | undefined,
  stringB: string | null | undefined): number => {

  if (stringA == null) { return -1 }
  if (stringB == null) { return 1 }

  const result = stringA!.localeCompare(stringB!);
  return result;
};

export const sortStringDescending = (
  stringA: string | null | undefined,
  stringB: string | null | undefined): number => {

  if (stringA == null) { return 1 }
  if (stringB == null) { return -1 }

  const result = stringB!.localeCompare(stringA!);
  return result;
};
