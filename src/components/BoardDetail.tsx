import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cardItemState } from '../recoil/cardItem';
import { detailIdState } from '../recoil/detail';
import { CardItemType } from '../types';
import { TASK } from '../util/constants';
import SearchManager from './SearchManager';

interface Props {
  item: CardItemType;
}

export default function BoardDetail({ item }: Props) {
  const { id, title, date, state, manager, content } = item;
  const [card, setCard] = useRecoilState(cardItemState);
  const setDetailShow = useSetRecoilState(detailIdState);

  const [value, setValue] = useState({
    title,
    date,
    state,
    manager,
    content,
  });

  const [isRequest, setIsRequest] = useState(false);

  const handleChangeValue = (e: any, k: string) => {
    setValue({ ...value, [k]: e.target.value });
  };

  const handleSubmit = () => {
    const newCard = card.map(e => (e.id === id ? { id, ...value } : e));
    setCard(newCard);

    setIsRequest(true);
    setTimeout(() => {
      setIsRequest(false);
    }, 500);

    setDetailShow('');
  };

  if (!id) return <div />;
  return (
    <div>
      <div>
        <div>
          <div>
            제목:
            <input
              type="text"
              value={value.title}
              onChange={e => {
                handleChangeValue(e, 'title');
              }}
            />
          </div>
          <div>고유번호 : {id}</div>
          <div>
            마감일 :
            <input
              type="datetime-local"
              value={value.date}
              onChange={e => {
                handleChangeValue(e, 'date');
              }}
            />
          </div>
          <div>
            상태 :
            <select
              onChange={e => {
                handleChangeValue(e, 'state');
              }}
              defaultValue={state}
            >
              {TASK.map(v => (
                <option label={v.task} key={v.id}>
                  {v.task}
                </option>
              ))}
            </select>
          </div>
          <div>
            담당자 :{' '}
            <SearchManager defaultManager={manager} setValue={setValue} />
          </div>
          <div>
            내용 :
            <textarea
              name=""
              id=""
              value={value.content}
              onChange={e => {
                handleChangeValue(e, 'content');
              }}
            />
          </div>
        </div>
        <div>
          <button type="button" disabled={isRequest} onClick={handleSubmit}>
            저장
          </button>
          <button type="button" onClick={() => setDetailShow('')}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
