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
    <div
      style={{ display: 'inline-block', position: 'relative', width: '180px' }}
      className="w-[200px] inline relative z-10"
    >
      <input
        style={{ borderBottom: '0px' }}
        onChange={handleChange}
        required
        value={filter}
        onFocus={handleFocus}
        onBlur={() => {
          setFilter(selectedManager);
          setFocused(false);
        }}
        placeholder="담당자 검색"
        className=" px-3 py-2 cursor-pointer   focus:cursor-text focus:border w-[200px] rounded focus:shadow-md mb-3"
        type="text"
      />
      <ul
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          visibility: focused ? 'visible' : 'hidden',
          border: '1px solid rgba(0,0,0,0.7)',
          borderRadius: '5px',
        }}
        className={`${
          focused ? 'inline' : 'invisible'
        }  cursor-pointer absolute w-full bg-white border `}
      >
        {filteredManagers.map(manager => (
          <li
            style={{
              padding: '10px 15px',
              cursor: 'pointer',
            }}
            role="presentation"
            key={manager}
            onMouseDown={() => handleClick(manager)}
            className="p-3 list-none hover:bg-sky-200"
          >
            {manager}
          </li>
        ))}
      </ul>
    </div>
  );
}
