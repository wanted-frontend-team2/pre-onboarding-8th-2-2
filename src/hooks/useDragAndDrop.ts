import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { cardItemState } from '../recoil/cardItem';
import { fromCardIndex } from '../recoil/fromCardInex';
import { toCardIndex } from '../recoil/toCardInex';

export const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [card, setCard] = useRecoilState(cardItemState);

  const fromcardIndex = useRecoilValue(fromCardIndex);
  const tocardIndex = useRecoilValue(toCardIndex);

  const handleUpdateList = (id: string, task: string) => {
    const selectedCard = card.find(item => item.id === id);

    const from: any = +fromcardIndex;
    const to: any = +tocardIndex;

    if (selectedCard) {
      if (Array.isArray(card)) {
        if (from <= to) {
          setCard(prev => [
            ...prev.filter(item => item.id !== id),
            { ...selectedCard, state: task },
          ]);
        } else if (to < from) {
          setCard(prev => [
            { ...selectedCard, state: task },
            ...prev.filter(item => item.id !== id),
          ]);
        }
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
