import { ChangeEvent, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { cardItemState } from '../recoil/cardItem';
import { detailIdState } from '../recoil/detail';
import { TASK } from '../util/constants';
import { BoardCard, BoardDetail } from './index';

export default function BoardList() {
  const [filter, setFilter] = useState('');
  const card = useRecoilValue(cardItemState);
  const detailShow = useRecoilValue(detailIdState);

  const filteredManagerCards = useMemo(
    () =>
      card.filter(items =>
        items.manager.toLowerCase().includes(filter.toLowerCase()),
      ),
    [filter, card],
  );

  const taskFilter = (task: string) => {
    const filteredCard = filteredManagerCards.filter(
      data => data.state === task,
    );
    return filteredCard;
  };

  return (
    <div>
      <div>
        <input
          style={{ border: '1px solid rgba(0,0,0,0.8)' }}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
          value={filter}
          placeholder="담당자 검색"
        />
      </div>
      {TASK?.map(item => (
        <BoardCard
          key={item.id}
          taskType={item.task}
          filteredCard={taskFilter(item.task)}
        />
      ))}
      {card.map(
        item =>
          item.id === detailShow && <BoardDetail key={item.id} item={item} />,
      )}
    </div>
  );
}
