/* eslint-disable prefer-const */
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { cardItemState } from '../recoil/cardItem';
import { fromCardIndex } from '../recoil/fromCardInex';
import { toCardIndex } from '../recoil/toCardInex';
import { boardIndex } from '../recoil/boardIndex';
import { TASK } from '../util/constants';

export const useDragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [card, setCard] = useRecoilState(cardItemState);
  // const [boards, setBoards] = useRecoilState(board);

  const fromcardIndex = useRecoilValue(fromCardIndex);
  const tocardIndex = useRecoilValue(toCardIndex);

  const fromboardIndex = useRecoilValue(boardIndex);

  const handleUpdateList = (id: string, task: string, taskindex: number) => {
    const selectedCard = card.find(item => item.id === id);

    const taskArray = TASK.map(el => el.task);
    // console.log(taskArray);

    let from: any = +fromcardIndex; // 움직이는 카드의 인덱스
    let to: any = +tocardIndex; // 놓을 카드위치의 인덱스
    let fromBoard = +fromboardIndex; // 출발하는 보드의 인덱스
    let toBoard = +taskindex; // 놓을 보드의 인덱스

    const targetList = card.filter(c => c.state === task);

    console.log(targetList[to]);

    // // const tempBoards = [...taskArray];
    // const sourceCard = [...card];

    // const a = sourceCard.splice(0, 1);
    // // (시작위치, 추가할 갯수)

    // sourceCard.splice(1, 0, a);
    // (시작위치, 삭제갯수, 추가할 것들)

    // console.log('now board', taskindex);
    // console.log('from', fromboardIndex);

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
