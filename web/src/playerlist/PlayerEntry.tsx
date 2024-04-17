import { FC } from 'react';

import { mitmipfs } from '../utils/mitmipfs.js';
import { usePlayerMetadata } from './getPlayerMetadata.js';
import { useAccount, useWriteContract } from 'wagmi';
import { CTG_TOKEN_CHAIN, CTG_TOKEN_CONTRACT } from './getPlayers.js';
import { CTG_VAULT_ADDRESS } from './PlayerList.js';
import { CTG_TOKEN_ABI } from '../CTGTokenAbi.js';

export const PlayerEntry: FC<{
    tokenId: string;
    hideDelegateButton?: boolean;
}> = ({ tokenId, hideDelegateButton }) => {
    const { data } = usePlayerMetadata(tokenId);

    const { address } = useAccount();
    const { writeContractAsync } = useWriteContract();

    const transferToken = async () => {
        if (address) {
            await writeContractAsync({
                address: CTG_TOKEN_CONTRACT,
                chainId: CTG_TOKEN_CHAIN,
                functionName: 'safeTransferFrom',
                args: [address, CTG_VAULT_ADDRESS, BigInt(tokenId)],
                abi: CTG_TOKEN_ABI,
            });
        }
    };

    return (
        <div>
            <div className="flex border p-2 rounded-lg border-dark-border gap-2 items-center">
                <div className="h-12 w-12 aspect-square rounded-lg border border-dark-border overflow-hidden">
                    <img
                        src={mitmipfs(data?.image || '')}
                        alt={data?.name}
                        className="block aspect-square w-full h-full"
                    />
                </div>
                {/* <video src={mitmipfs(data.animation_url)} className="block aspect-square w-full h-full" autoPlay={true} loop={true} /> */}
                <div className="grow">
                    <h3>#{tokenId}</h3>
                </div>
                {/* <div>Delegate Soon</div> */}
                {!hideDelegateButton && (
                    <div className="btn btn-small" onClick={transferToken}>
                        Delegate
                    </div>
                )}
            </div>
        </div>
    );
};
