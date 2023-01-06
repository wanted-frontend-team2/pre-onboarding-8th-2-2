import { CardItemType } from '../types';

export const localStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (param: CardItemType[]) => void;
    onSet: (
      param: (
        newValue: CardItemType[],
        oldValue: CardItemType[] | any,
        isReset: boolean,
      ) => void,
    ) => void;
  }): void => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: CardItemType[], isReset: boolean): void =>
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue)),
    );
  };
