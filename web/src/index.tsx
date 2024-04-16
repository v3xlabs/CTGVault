import './globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { http, createConfig } from 'wagmi';
import { base, mainnet, optimism } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';
import { ConnectKitProvider } from 'connectkit';

import { App } from './App';

const queryClient = new QueryClient()

const config = createConfig({
    chains: [base],
    connectors: [
        injected(),
        walletConnect({ projectId: '9a9eccbc15cb6504b32a44f9d0154c42', showQrModal: false }),
        // metaMask(),
        safe(),
    ],
    transports: {
        [base.id]: http(),
    },
})

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
