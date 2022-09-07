import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import './index.css';

import { appTheme } from './Utils/theme/app-theme';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const engine = new Styletron({ prefix: '_' });

const renderRoot = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
);

renderRoot.render(
  <React.StrictMode>
    <RecoilRoot>
      <StyletronProvider value={engine}>
        <BaseProvider theme={appTheme} zIndex={110}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BaseProvider>
      </StyletronProvider>
    </RecoilRoot>
  </React.StrictMode>
);
