import useSWR from 'swr';
import { base, sepolia } from 'viem/chains';

type AlchemyPlayerResult = {
    contract: {
        address: '0x4DfC7EA5aC59B63223930C134796fecC4258d093';
        name: 'Crypto: The Game S2';
        symbol: 'CTGS2';
        totalSupply: '800';
        tokenType: 'ERC721';
        contractDeployer: null;
        deployedBlockNumber: null;
        openSeaMetadata: {
            floorPrice: null;
            collectionName: null;
            collectionSlug: null;
            safelistRequestStatus: null;
            imageUrl: null;
            description: null;
            externalUrl: null;
            twitterUsername: null;
            discordUrl: null;
            bannerImageUrl: null;
            lastIngestedAt: null;
        };
        isSpam: null;
        spamClassifications: [];
    };
    tokenId: '65';
    tokenType: 'ERC721';
    name: 'Crypto: The Game S2 – Green Tribe';
    description: 'This NFT assigns its holder to the Green Tribe for the second season of Crypto: The Game.';
    tokenUri: 'https://ipfs.io/ipfs/bafybeierbgjg36i4j43mikzyubmlzjyucmhonhenifymubls4orlqla5vu/65';
    image: {
        cachedUrl: 'https://nft-cdn.alchemy.com/base-mainnet/8e352035ad49b005657da6a3d21ede98';
        thumbnailUrl: 'https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/base-mainnet/8e352035ad49b005657da6a3d21ede98';
        pngUrl: 'https://res.cloudinary.com/alchemyapi/image/upload/convert-png/base-mainnet/8e352035ad49b005657da6a3d21ede98';
        contentType: 'image/png';
        size: 602_571;
        originalUrl: 'https://ipfs.io/ipfs/QmXsnwdrubNNwpEZzN722Fxxmf5NpvV12CsVjhxAE5cSGu/Final%20NFT%20Green.png';
    };
    raw: {
        tokenUri: 'ipfs://bafybeierbgjg36i4j43mikzyubmlzjyucmhonhenifymubls4orlqla5vu/65';
        metadata: {
            image: 'ipfs://QmXsnwdrubNNwpEZzN722Fxxmf5NpvV12CsVjhxAE5cSGu/Final%20NFT%20Green.png';
            external_url: 'https://cryptothegame.com';
            animation_url: 'ipfs://QmXsnwdrubNNwpEZzN722Fxxmf5NpvV12CsVjhxAE5cSGu/Final%20NFT%20Green.mp4';
            name: 'Crypto: The Game S2 – Green Tribe';
            description: 'This NFT assigns its holder to the Green Tribe for the second season of Crypto: The Game.';
            base_index: 35;
            properties: {
                Season: '2';
                Tribe: 'Green';
            };
        };
        error: null;
    };
    collection: null;
    mint: {
        mintAddress: null;
        blockNumber: null;
        timestamp: null;
        transactionHash: null;
    };
    owners: null;
    timeLastUpdated: '2024-04-16T03:12:17.883Z';
    balance: '1';
    acquiredAt: {
        blockTimestamp: null;
        blockNumber: null;
    };
};

type AlchemyResultType = {
    ownedNfts: AlchemyPlayerResult[];
    totalCount: 1;
    validAt: {
        blockNumber: 13_232_863;
        blockHash: '0xdbe5c06d45f6c9f05800fc60dd40383fd68754ff7f18b128e6e5e98ee92bd8df';
        blockTimestamp: '2024-04-16T08:11:13Z';
    };
    pageKey: null;
};

// Sepolia
// export const CTG_TOKEN_CHAIN = sepolia.id;
// export const CTG_TOKEN_CONTRACT = '0x5D0b7eEeBFE2Daa14eBa624Dd794ccAe5AcB6037';

// Base
export const CTG_TOKEN_CHAIN = base.id;
export const CTG_TOKEN_CONTRACT = '0x4dfc7ea5ac59b63223930c134796fecc4258d093';

const ALCHEMY_API = 'fY_TK6shxxy4KXzHL3IDzh_p8QKDpGyL';

export const getPlayers = async (owner: string) => {
    const result = await fetch(
        `https://base-mainnet.g.alchemy.com/nft/v3/${ALCHEMY_API}/getNFTsForOwner?owner=${owner}&contractAddresses[]=${CTG_TOKEN_CONTRACT}&withMetadata=true&pageSize=100`,
        {}
    );

    // const result = await fetch(
    //     `https://eth-sepolia.g.alchemy.com/nft/v3/${ALCHEMY_API}/getNFTsForOwner?owner=${owner}&contractAddresses[]=${CTG_TOKEN_CONTRACT}&withMetadata=true&pageSize=100`,
    //     {}
    // );

    return result.json() as any as AlchemyResultType;
};

export const usePlayers = (owner: string) => {
    return useSWR(owner, () => getPlayers(owner));
};
