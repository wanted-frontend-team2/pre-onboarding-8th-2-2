import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Board from './pages/Board';
import './index.css';

import Loding from './components/Loding';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Loding />}>
        <Board />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);
