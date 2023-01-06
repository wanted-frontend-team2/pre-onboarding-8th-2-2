import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { useDragAndDrop } from '../hooks/useDragAndDrop';
import { cardItemState } from '../recoil/cardItem';
import { CardItemType } from '../types';
import BoardCardItem from './BoardCardItem';

interface Props {
  taskType: string;
  filteredCard: any;
}

export default function BoardCard({ taskType, filteredCard }: Props) {
  const setCard = useSetRecoilState(cardItemState);
  const { handleUpdateList, handleDragging } = useDragAndDrop();

  const handleCreateCard = () => {
    setCard(prev => [
      ...prev,
      {
        id: uuidv4(),
        title: '',
        date: '',
        state: taskType,
        manager: '',
        content: '',
      },
    ]);
  };

  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    handleUpdateList(e.dataTransfer.getData('data'), taskType);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLUListElement>) =>
    e.preventDefault();

  return (
    <div>
      <p>{taskType}</p>
      <ul onDrop={e => handleDrop(e)} onDragOver={e => handleDragOver(e)}>
        {filteredCard?.map(
          (item: CardItemType, index: number) =>
            item.state === taskType && (
              <BoardCardItem
                key={item.id}
                index={index}
                item={item}
                handleDragging={handleDragging}
              />
            ),
        )}
      </ul>
      <button type="submit" onClick={handleCreateCard}>
        + 새로 만들기
      </button>
    </div>
  );
}
