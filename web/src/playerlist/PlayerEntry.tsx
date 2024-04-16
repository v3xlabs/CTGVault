import { FC } from 'react';

import { mitmipfs } from '../utils/mitmipfs.js';
import { usePlayerMetadata } from './getPlayerMetadata.js';

export const PlayerEntry: FC<{ tokenId: string }> = ({ tokenId }) => {
    const { data } = usePlayerMetadata(tokenId);

    return (
        <div>
            {data ? (
                <div className="flex border p-2 rounded-lg border-dark-border gap-2 items-center">
                    <div className="h-12 w-12 aspect-square rounded-lg border border-dark-border overflow-hidden">
                        <img
                            src={mitmipfs(data.image)}
                            alt={data.name}
                            className="block aspect-square w-full h-full"
                        />
                    </div>
                    {/* <video src={mitmipfs(data.animation_url)} className="block aspect-square w-full h-full" autoPlay={true} loop={true} /> */}
                    <div className="grow">
                        <h3>#{tokenId}</h3>
                    </div>
                    <div>Delegate Soon</div>
                    {/* <div className="btn btn-small">Delegate</div> */}
                </div>
            ) : (
                <div>
                    <p>loading...</p>
                </div>
            )}
        </div>
    );
};
