import './globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import { WagmiProvider } from 'wagmi';
import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { injected, safe, walletConnect } from 'wagmi/connectors';

import { App } from './App.jsx';

const queryClient = new QueryClient();

const config = createConfig({
    chains: [base],
    connectors: [
        injected(),
        walletConnect({
            projectId: '9a9eccbc15cb6504b32a44f9d0154c42',
            showQrModal: false,
        }),
        // metaMask(),
        safe(),
    ],
    transports: {
        [base.id]: http(),
    },
});

// @ts-ignore
BigInt.prototype.toJSON = function () {
    return this.toString();
};

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
    <React.StrictMode>
        <SWRConfig>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <ConnectKitProvider theme="midnight">
                        <App />
                    </ConnectKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </SWRConfig>
    </React.StrictMode>
);
