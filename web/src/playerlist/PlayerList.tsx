import useSWR from "swr";
import { PlayerEntry } from "./PlayerEntry";
import { usePlayers } from "./getPlayers.js";
import { useAccount } from "wagmi";

export const PlayerList = () => {
    // TODO: Load a users nfts here
    // const {} = useSWR()
    const { address } = useAccount();
    const { data } = usePlayers(address as string);

    return (
        <div>
            <h2>Your Players</h2>
            <div>
                {
                    data && data.ownedNfts.map((player) => <PlayerEntry tokenId={player.tokenId} />)
                }
                {
                    data && data.ownedNfts.length === 0 && <p>No players found</p>
                }
            </div>
        </div>
    )
};
