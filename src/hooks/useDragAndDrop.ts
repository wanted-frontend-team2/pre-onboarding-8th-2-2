/* eslint-disable prefer-const */
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { cardItemState } from '../recoil/cardItem';

import { toCardIndex } from '../recoil/toCardInex';

export const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [card, setCard] = useRecoilState(cardItemState);

  const tocardIndex = useRecoilValue(toCardIndex);

  const handleUpdateList = (id: string, task: string, taskindex: number) => {
    const selectedCard = card.find(item => item.id === id);

    let to: any = +tocardIndex; // 놓을 카드위치의 인덱스

    const sourceCard = [...card];
    let indexCard: any = 0;

    if (selectedCard !== undefined)
      indexCard = sourceCard.indexOf(selectedCard);

    sourceCard.splice(indexCard, 1);

    if (selectedCard !== undefined) {
      sourceCard.splice(to, 0, { ...selectedCard, state: task });
    }
    if (selectedCard) {
      if (Array.isArray(card)) {
        setCard(sourceCard);
      }
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    card,
    handleUpdateList,
    handleDragging,
  };
};
