import { CardItemType } from '../types/index.d';

export const localStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (args: CardItemType[]) => void;
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
    onSet((newValue: CardItemType[], _: any, isReset: boolean) =>
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue)),
    );
  };
