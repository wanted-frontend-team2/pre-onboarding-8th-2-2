import BoardList from '../components/BoardList';

export default function Board() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-scroll text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="flex items-center justify-center flex-shrink-0 w-full h-16 px-10">
        <h1 className="text-2xl font-bold">Kanban Board</h1>
      </div>
      <BoardList />
    </div>
  );
}
