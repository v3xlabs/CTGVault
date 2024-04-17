import { useAccount, useBlockNumber, useReadContract } from 'wagmi';
import { useQueryClient } from '@tanstack/react-query';

import { usePlayers } from './getPlayers.js';
import { PlayerEntry } from './PlayerEntry.js';
import { base, sepolia } from 'viem/chains';
import { ERC_6551_CTG_VAULT_ABI } from '../erc6551CTGVaultAbi.js';
import { useEffect } from 'react';

// Sepolia
// export const CTG_VAULT_CHAIN = sepolia.id;
// export const CTG_VAULT_ADDRESS = '0x4A5A9c2Ae0dfc13671C5997F5F62038c31345Bc0';

// Base
export const CTG_VAULT_CHAIN = base.id;
export const CTG_VAULT_ADDRESS = '0x50351173A9338E2741A747B78db6B1101F70eC3c';

export const PlayerList = () => {
    // TODO: Load a users nfts here
    // const {} = useSWR()
    const { address } = useAccount();
    const { data: playerData, mutate: refreshPlayerData } = usePlayers(
        address as string
    );

    const queryClient = useQueryClient();

    const { data: blockNumber } = useBlockNumber({ watch: true });
    const { data: stakedData, queryKey } = useReadContract({
        chainId: CTG_VAULT_CHAIN,
        address: CTG_VAULT_ADDRESS,
        functionName: 'getStakedTokenIds',
        args: address ? [address] : undefined,
        abi: ERC_6551_CTG_VAULT_ABI,
    });

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey });
    }, [blockNumber]);

    useEffect(() => {
        refreshPlayerData();
    }, [stakedData?.length]);

    return (
        <>
            {playerData && <h2>Available NFTs to Delegate</h2>}
            <div>
                {playerData &&
                    playerData.ownedNfts.map((player) => (
                        <PlayerEntry tokenId={player.tokenId} />
                    ))}
                {playerData && playerData.ownedNfts.length === 0 && (
                    <p>No NFTs found</p>
                )}
            </div>

            {stakedData && <h2>Staked NFTs</h2>}
            <div>
                {stakedData &&
                    stakedData.map((player) => (
                        <PlayerEntry tokenId={player.toString()} />
                    ))}
                {stakedData && stakedData.length === 0 && <p>No NFTs found</p>}
            </div>
        </>
    );
};
