import { formatAddress } from '@ens-tools/format';
import { useProfile } from 'use-enstate';
import { useAccount, useDisconnect } from 'wagmi';

export const WalletInfo = () => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data } = useProfile(address as string, { endpoint: 'https://enstate.rs', enabled: address !== undefined });

    return (
        <div className="flex justify-between gap-4 items-center">
            <span className="inline-flex">
                You are connected as <span className="font-bold px-0.5">{data ? (
                    <span className="inline-flex items-center justify-center gap-1 h-4 relative" title={address as string}>
                        {
                            data.avatar &&
                            <span className="w-5 h-5 overflow-hidden aspect-square rounded-lg shadow-md shadow-white/10 absolute left-1 top-1/2 -translate-y-1/2">
                                <img src={data.avatar} className='w-full h-full' />
                            </span>
                        }
                        <span className="pl-7">{data.name}</span>
                    </span>
                ) : formatAddress(address as string)}</span>
            </span>
            <button className="btn" onClick={() => {
                disconnect();
            }}>
                Disconnect
            </button>
        </div>
    )
};
