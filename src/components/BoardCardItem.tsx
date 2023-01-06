import { useSetRecoilState } from 'recoil';
import { HiCalendar, HiUser } from 'react-icons/hi';
import { detailIdState } from '../recoil/detail';
import { CardItemType } from '../types';
import { fromCardIndex } from '../recoil/fromCardInex';
import { toCardIndex } from '../recoil/toCardInex';
import { boardIndex } from '../recoil/boardIndex';

interface Props {
  item: CardItemType;
  index: number;
  taskIndex: number;
  handleDragging: (dragging: boolean) => void;
}

export default function BoardCardItem({
  item,
  index,
  taskIndex,
  handleDragging,
}: Props) {
  const setFromCardIndex = useSetRecoilState(fromCardIndex);
  const setToCardIndex = useSetRecoilState(toCardIndex);
  const setDetailShow = useSetRecoilState(detailIdState);
  const setFromBoardIndex = useSetRecoilState(boardIndex);

  const handleDetailShow = (id: string) => {
    setDetailShow(id);
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('data', item.id);
    setFromCardIndex(index);
    handleDragging(true);
  };

  const handleDragEnter = () => {
    setToCardIndex(index);
    setFromBoardIndex(taskIndex);
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
      className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
    >
      <h4 className="text-sm font-medium">
        {!item.title ? '제목없음' : item.title}
      </h4>
      <div className="flex items-center w-full mt-3 font-medium text-gray-400">
        <div className="flex items-center">
          <HiCalendar />
          <span className="ml-1 text-xs leading-none">
            {!item.date ? '날짜 없음' : item.date}
          </span>
        </div>
        <div className="flex items-center ml-auto">
          <HiUser />
          <span className="ml-1 text-xs leading-none">
            {!item.manager ? '담당자 없음' : item.manager}
          </span>
        </div>
      </div>
    </li>
  );
}
