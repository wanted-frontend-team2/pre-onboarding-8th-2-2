import { useSetRecoilState } from 'recoil';
import { HiPlus } from 'react-icons/hi';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { CardItemType } from '../types';
import BoardCardItem from './BoardCardItem';
import { detailIdState } from '../recoil/detail';

interface Props {
  taskType: string;
  filteredCard: CardItemType[];
}

export default function BoardCard({ taskType, filteredCard }: Props) {
  const { handleUpdateList, handleDragging } = useDragAndDrop();
  const setDetailShow = useSetRecoilState(detailIdState);

  const handleDetailShow = (id: string) => {
    setDetailShow(id);
  };

  const handleCreateCard = () => {
    handleDetailShow(`new${taskType}`);
  };

  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    handleUpdateList(e.dataTransfer.getData('data'), taskType, taskIndex);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLUListElement>) =>
    e.preventDefault();

  return (
    <div className="flex flex-col flex-shrink-0 w-72">
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold">{taskType}</span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          {filteredCard.length}
        </span>
        <button
          type="submit"
          onClick={handleCreateCard}
          className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
        >
          <HiPlus />
        </button>
      </div>
      <ul
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        className="flex flex-col pb-2 min-h-[20rem]"
      >
        {filteredCard?.map(
          (item: CardItemType, index: number) =>
            item.state === taskType && (
              <BoardCardItem
                key={item.id}
                index={index}
                taskIndex={taskIndex}
                item={item}
                handleDragging={handleDragging}
              />
            ),
        )}
      </ul>
    </div>
  );
}
