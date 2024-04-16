import useSWR from "swr";
import { PlayerEntry } from "./PlayerEntry";

export const PlayerList = () => {
    // TODO: Load a users nfts here
    // const {} = useSWR()

    return (
        <div>
            <h2>Your Players</h2>
            <div>
                <PlayerEntry tokenId="65" />
            </div>
        </div>
    )    
};
