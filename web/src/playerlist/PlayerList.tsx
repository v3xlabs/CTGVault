import { useAccount } from 'wagmi';

import { usePlayers } from './getPlayers.js';
import { PlayerEntry } from './PlayerEntry.js';

export const PlayerList = () => {
    // TODO: Load a users nfts here
    // const {} = useSWR()
    const { address } = useAccount();
    const { data } = usePlayers(address as string);

    return (
        <>
            <h2>Your Players</h2>
            <div>
                {data &&
                    data.ownedNfts.map((player) => (
                        <PlayerEntry tokenId={player.tokenId} />
                    ))}
                {data && data.ownedNfts.length === 0 && <p>No players found</p>}
            </div>
        </>
    );
};
