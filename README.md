# Kanban Board

> 칸반보드 형태의 이슈 트래킹 서비스입니다. 

[서비스 바로가기](https://pre-onboarding-8th-2-2.netlify.app/)

<br>

## 사용 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-007AF4?style=flat-square&logo=Recoil&logoColor=fff"/> <img src="https://img.shields.io/badge/uuid-000?style=flat-square&logo=uuid&logoColor=fff"/>

<br>

## 세부 기능
### 이슈 목록 보기
칸반보드 형태의 이슈 목록입니다.
![show list](https://user-images.githubusercontent.com/70076564/211027564-2fdbcd2d-98e7-491a-8422-33137f1da59d.gif)

- 상태별로 분류되어 보여집니다.
- 초기에는 고유번호의 오름차순대로 정렬되어 있습니다.
  - 고유번호는 uuid로 생성됩니다.
- 드래그 앤 드롭으로 이슈의 상태와 순서를 변경할 수 있습니다. 드래그를 통해 변경된 순서는 고유번호보다 우선 적용됩니다.

<br>

### 이슈 추가
각 상태값 오른쪽의 + 버튼을 클릭하면 모달이 뜨며 새로운 이슈를 추가할 수 있습니다.
![new issue](https://user-images.githubusercontent.com/70076564/211025390-be20b883-c526-4ce7-adcf-c54ab4844687.gif)

- 전체에 하나의 추가 버튼 대신 각 상태별로 이슈를 추가할 수 있습니다.
  - 컴포넌트를 재활용하여 중복 코드를 줄였습니다. 
- 제목은 필수 입력값이며 입력하지 않을 시 에러메세지가 뜨며 저장되지 않습니다.
- X 버튼과 Delete 버튼을 클릭 시 모달이 닫히고 이슈 추가가 취소됩니다.
- 제목을 제외한 필드는 옵션값이며 입력하지 않아도 저장이 됩니다.
- 담당자를 검색해 선택할 수 있습니다.
  - `useMemo`를 사용하여 렌더링을 최적화했습니다.
  - 검색된 담당자 목록이 길 경우 목록을 스크롤해 내릴 수 있습니다.

<br>

### 이슈 상세 보기
각 카드를 클릭하면 모달이 뜨며 이슈의 상세 내용을 확인할 수 있습니다.
![show detail](https://user-images.githubusercontent.com/70076564/211022033-8d253420-cfbf-4de7-9aa8-960c1be39bd0.gif)

- X 버튼을 클릭하면 모달이 닫힙니다.
- Delete 버튼을 누르면 해당 이슈가 삭제됩니다.

<br>

### 이슈 정보 수정
카드를 클릭하여 뜬 모달에서 각 이슈의 정보를 수정할 수 있습니다.
![editing](https://user-images.githubusercontent.com/70076564/211021913-0478ca6f-76a3-4fc4-a39e-be09032a232a.gif)

- 수정 후 Save 버튼을 누르면 모달이 닫히며 수정 내용이 반영됩니다.
- X 버튼을 누르면 수정 내용의 반영 없이 모달이 닫힙니다.

<br>

### 담당자 검색(추가 기능)
보드 메인에서 담당자를 검색해 해당하는 이슈만을 확인할 수 있습니다.
![manager searching](https://user-images.githubusercontent.com/70076564/211021673-29a8cacc-9ea7-4b88-9a43-4ad333da15f3.gif)

<br>

### 기타 고려한 항목
- React의 기본 기능 Suspense를 활용해 로딩 중에는 로딩 이미지가 나옵니다.
- 중복 액션 방지를 위해 실행 후 0.5초 동안에는 해당 버튼이 disabled 됩니다. 
- 데이터는 로컬스토리지에 저장되어 새로고침을 하거나 창을 닫았다 켜도 유지됩니다.

<Br><Br>

## 설치 및 실행 방법

```javascript
git clone https://github.com/wanted-frontend-team2/pre-onboarding-8th-2-2.git
npm i
npm run start
```

- 3000번 포트에서 시작됩니다.

<br><Br>

## 팀원
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/DongWooKim97"><img src="https://avatars.githubusercontent.com/u/66302122?v=4" width="100px;" alt="김동우 프로필"/><br /><sub><b>김동우</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/trondi"><img src="https://avatars.githubusercontent.com/u/42338190?v=4" width="100px;" alt="김수경 프로필"/><br /><sub><b>김수경</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/Elenapark"><img src="https://avatars.githubusercontent.com/u/60565155?v=4" width="100px;" alt="박성은 프로필"/><br /><sub><b>박성은</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/Iandayy"><img src="https://avatars.githubusercontent.com/u/104152583?v=4" width="100px;" alt="박수연 프로필"/><br /><sub><b>박수연</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/ahn0min"><img src="https://avatars.githubusercontent.com/u/89904226?v=4" width="100px;" alt="안영민 프로필"/><br /><sub><b>안영민</b></sub></a><br />팀원<br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/heony704"><img src="https://avatars.githubusercontent.com/u/36994104?v=4" width="100px;" alt="이승헌 프로필"/><br /><sub><b>이승헌</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/Jooseulgi"><img src="https://avatars.githubusercontent.com/u/54945205?v=4" width="100px;" alt="주슬기 프로필"/><br /><sub><b>주슬기</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/dukjjang"><img src="https://avatars.githubusercontent.com/u/102455275?v=4" width="100px;" alt="진현덕 프로필"/><br /><sub><b>진현덕</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/cofla159"><img src="https://avatars.githubusercontent.com/u/70076564?v=4" width="100px;" alt="황채림 프로필"/><br /><sub><b>황채림</b></sub></a><br />팀장<br /></td>
    </tr>
  </tbody>
</table>
