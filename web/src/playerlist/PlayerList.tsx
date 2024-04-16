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
                    data && data.result.map((player) => <PlayerEntry tokenId={player.token_id} />)
                }
                {
                    data && data.result.length === 0 && <p>No players found</p>
                }
            </div>
        </div>
    )
};
