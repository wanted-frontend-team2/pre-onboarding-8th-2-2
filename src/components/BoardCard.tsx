import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { cardItemState } from '../recoil/cardItem';
import { CardItemType } from '../types';
import BoardCardItem from './BoardCardItem';
import * as S from './index.style';

interface Props {
  taskType: string;
  filteredCard: any;
}

export default function BoardCard({ taskType, filteredCard }: Props) {
  const setCard = useSetRecoilState(cardItemState);

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

  return (
    <S.BoardCard>
      <p>{taskType}</p>
      <S.BoardCardList>
        {filteredCard?.map(
          (item: CardItemType) =>
            item.state === taskType && (
              <BoardCardItem key={item.id} item={item} />
            ),
        )}
      </S.BoardCardList>
      <S.CreateBtn onClick={handleCreateCard}>+ 새로 만들기</S.CreateBtn>
    </S.BoardCard>
  );
}
