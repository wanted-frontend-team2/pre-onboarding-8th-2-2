import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { HiX } from 'react-icons/hi';
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

  const handleDeleteCard = (itemId: string) => {
    setCard(card.filter(el => el.id !== itemId));

    setIsRequest(true);
    setTimeout(() => {
      setIsRequest(false);
    }, 500);
  };

  if (!id) return <div />;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen h-screen bg-stone-800/60">
      <div className="relative max-w-2xl m-auto mt-20 bg-white rounded-lg shadow">
        <button
          type="button"
          onClick={() => setDetailShow('')}
          className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center"
        >
          <HiX />
        </button>
        <div className="px-6 py-6">
          <form className="space-y-2">
            <input
              type="text"
              value={value.title}
              onChange={e => {
                handleChangeValue(e, 'title');
              }}
              className="text-xl font-semibold w-11/12 bg-gray-100 text-gray-900 rounded-lg p-1 border border-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none">
                마감일
              </span>
              <input
                type="datetime-local"
                value={value.date}
                onChange={e => {
                  handleChangeValue(e, 'date');
                }}
                className="font-light bg-gray-100 text-gray-900 rounded-lg border border-white p-1 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
              />
            </div>
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none">
                상태
              </span>
              <select
                defaultValue={state}
                onChange={e => {
                  handleChangeValue(e, 'state');
                }}
                className="w-40 font-light bg-gray-100 text-gray-900 rounded-lg border border-white p-1 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
              >
                {TASK.map(v => (
                  <option label={v.task} key={v.id}>
                    {v.task}
                  </option>
                ))}
              </select>
            </div>
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none ">
                담당자
              </span>
              <SearchManager defaultManager={manager} setValue={setValue} />
            </div>
            <textarea
              name=""
              id=""
              value={value.content}
              onChange={e => {
                handleChangeValue(e, 'content');
              }}
              className="text-gray-900 bg-gray-100 rounded-lg py-1 px-2 w-full h-72 resize-none border border-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                disabled={isRequest}
                onClick={handleSubmit}
                className="rounded-lg border border-transparent bg-blue-700 py-2 px-4 ml-1 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Save
              </button>
              <button
                type="button"
                disabled={isRequest}
                onClick={() => {
                  handleDeleteCard(id);
                }}
                className="rounded-lg border border-transparent bg-red-600 py-2 px-4 ml-1 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
