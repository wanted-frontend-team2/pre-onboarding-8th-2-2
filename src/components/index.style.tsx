import styled from 'styled-components';

// BoardList.tsx
export const BoardList = styled.div`
  display: flex;
`;

// BoardCard.tsx
export const CreateBtn = styled.button`
  display: flex;
  color: #999;
`;

export const BoardCard = styled.div`
  margin: 10px 30px;
  min-width: 260px;
`;

export const BoardCardList = styled.ul`
  min-height: 20px;
`;

// BoardCardItem.tsx
export const CardItem = styled.li`
  position: relative;
  padding: 8px 10px 6px 6px;
  margin: 10px 0;
  width: 260px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #f9f9f9;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fcfcfc;
  }
`;

export const ModifyBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaa;
  button {
    color: #aaa;
  }
`;

// BoardDetail.tsx
export const BoardDetail = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const BoardDetailInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  padding: 30px;
  min-width: 430px;
  background: #fff;
`;

export const DetailForm = styled.div`
  > div {
    margin: 5px;
  }
`;
