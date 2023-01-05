import { atom } from 'recoil';
import { CardItemType } from '../types';
import { localStorageEffect } from '../util/localstorage';

export const cardItemState = atom<CardItemType[]>({
  key: '#cardItemState',
  default: [],
  effects: [localStorageEffect('#cardItemState')],
});
