import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { Managers } from '../util/constants';

interface Props {
  setValue: Dispatch<
    SetStateAction<{
      title: string;
      date: string;
      state: string;
      manager: string;
      content: string;
    }>
  >;
  defaultManager: string;
}

export default function SearchManager({ setValue, defaultManager }: Props) {
  const [filter, setFilter] = useState(defaultManager);
  const [selectedManager, setSelectedManager] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredManagers = useMemo(
    () =>
      Managers.filter(manager =>
        manager.toLowerCase().includes(filter.toLowerCase()),
      ),
    [filter],
  );

  const handleClick = (manager: string) => {
    setValue(prev => ({ ...prev, manager }));
    setSelectedManager(manager);
  };

  const handleFocus = () => {
    setFilter('');
    setFocused(true);
  };

  return (
    <div className="inline-block">
      <input
        onChange={handleChange}
        required
        value={filter}
        onFocus={handleFocus}
        onBlur={() => {
          setFilter(selectedManager);
          setFocused(false);
        }}
        placeholder="담당자 검색"
        type="text"
        className="w-40 font-light bg-gray-100 text-gray-900 rounded-lg border border-white py-1 px-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
      />
      <ul
        style={{
          visibility: focused ? 'visible' : 'hidden',
        }}
        className={`${
          focused ? 'inline' : 'invisible'
        }  absolute left-36 top-44 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {filteredManagers.map(manager => (
          <li
            role="presentation"
            key={manager}
            onMouseDown={() => handleClick(manager)}
            className="cursor-pointer p-2 text-sm font-light list-none hover:bg-sky-200"
          >
            {manager}
          </li>
        ))}
      </ul>
    </div>
  );
}
