import { HiOutlineTrash } from 'react-icons/hi';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cardItemState } from '../recoil/cardItem';
import { detailIdState } from '../recoil/detail';
import { CardItemType } from '../types';
import { fromCardIndex } from '../recoil/fromCardInex';
import { toCardIndex } from '../recoil/toCardInex';

interface Props {
  item: CardItemType;
  index: number;
  handleDragging: (dragging: boolean) => void;
}

export default function BoardCardItem({ item, index, handleDragging }: Props) {
  const [card, setCard] = useRecoilState(cardItemState);
  const setCardIndex = useSetRecoilState(fromCardIndex);
  const setToCardIndex = useSetRecoilState(toCardIndex);
  const setDetailShow = useSetRecoilState(detailIdState);

  const handleDetailShow = (id: string) => {
    setDetailShow(id);
  };

  const handleDeleteCard = (id: string) => {
    setCard(card.filter(el => el.id !== id));
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('data', item.id);
    setCardIndex(index);
    handleDragging(true);
  };

  const handleDragEnter = () => {
    setToCardIndex(index);
  };

  const handleDragEnd = () => handleDragging(false);

  return (
    <li
      role="presentation"
      onClick={() => {
        handleDetailShow(item.id);
      }}
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
    >
      <div>{!item.title ? '제목없음' : item.title}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            handleDeleteCard(item.id);
          }}
        >
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
}
