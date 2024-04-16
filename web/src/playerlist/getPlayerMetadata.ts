import useSWR from 'swr';

type PlayerMetadata = {
    base_index: number;
    name: string;
    description: string;
    properties: {
        Season: number;
        Tribe: string;
    };
    external_url: string;
    image: string;
    animation_url: string;
};

export const getPlayerMetadata = async (tokenId: string) => {
    const res = await fetch(
        `https://ipfs.io/ipfs/bafybeierbgjg36i4j43mikzyubmlzjyucmhonhenifymubls4orlqla5vu/${tokenId}`
    );
    const data = await res.json();

    return data as PlayerMetadata;
};

export const usePlayerMetadata = (tokenId: string) => {
    return useSWR(tokenId, getPlayerMetadata);
};
