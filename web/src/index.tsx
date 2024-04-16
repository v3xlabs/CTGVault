import './globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';

import { App } from './App';

// @ts-ignore
BigInt.prototype.toJSON = function () {
    return this.toString();
};

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig>
            <App />
        </SWRConfig>
    </React.StrictMode>
);
