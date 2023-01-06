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
    <div className="flex flex-col items-center px-10">
      <input
        className="text-lg w-96 font-medium text-gray-900 rounded-2xl py-1 px-3 border border-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
        value={filter}
        placeholder="담당자 검색"
      />
      <div className="flex flex-grow justify-center px-10 pb-5 pt-3 space-x-6">
        {TASK?.map((item, index) => (
          <BoardCard
            key={item.id}
            taskIndex={index}
            taskType={item.task}
            filteredCard={taskFilter(item.task)}
          />
        ))}
      </div>
      {card.map(
        item =>
          item.id === detailShow && <BoardDetail key={item.id} item={item} />,
      )}
      {detailShow.slice(0, 3) === 'new' && (
        <BoardDetail
          key={0}
          item={{
            id: '0',
            title: '',
            date: '',
            state: detailShow.slice(3),
            manager: '',
            content: '',
          }}
        />
      )}
    </div>
  );
}
