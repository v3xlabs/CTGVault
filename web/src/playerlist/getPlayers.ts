import useSWR from "swr";

const CTG_CONTRACT = 0x4dfc7ea5ac59b63223930c134796fecc4258d093;

type MoralisPlayerResult = {
    "amount": "1",
    "token_id": "65",
    "token_address": "0x4dfc7ea5ac59b63223930c134796fecc4258d093",
    "contract_type": "ERC721",
    "owner_of": "0x69ec014c15baf1c96620b6ba02a391ababb9c96b",
    "last_metadata_sync": "2024-04-16T07:07:44.163Z",
    "last_token_uri_sync": "2024-04-16T07:07:43.855Z",
    "metadata": "{\"base_index\":35,\"name\":\"Crypto: The Game S2 – Green Tribe\",\"description\":\"This NFT assigns its holder to the Green Tribe for the second season of Crypto: The Game.\",\"properties\":{\"Season\":\"2\",\"Tribe\":\"Green\"},\"external_url\":\"https://cryptothegame.com\",\"image\":\"ipfs://QmXsnwdrubNNwpEZzN722Fxxmf5NpvV12CsVjhxAE5cSGu/Final%20NFT%20Green.png\",\"animation_url\":\"ipfs://QmXsnwdrubNNwpEZzN722Fxxmf5NpvV12CsVjhxAE5cSGu/Final%20NFT%20Green.mp4\"}",
    "block_number": "12643012",
    "block_number_minted": null,
    "name": "Crypto: The Game S2",
    "symbol": "CTGS2",
    "token_hash": "7bdd23de87d1cf27db4fb6390062e2a2",
    "token_uri": "https://ipfs.moralis.io:2053/ipfs/bafybeierbgjg36i4j43mikzyubmlzjyucmhonhenifymubls4orlqla5vu/65",
    "minter_address": null,
    "verified_collection": false,
    "possible_spam": false,
    "collection_logo": "https://i.seadn.io/s/raw/files/144b068089f36b8fd3b3369b0ee3603e.jpg?w=500&auto=format",
    "collection_banner_image": ""
};

type MoralisPlayerType = {
	"status": "SYNCED",
	"page": 1,
	"page_size": 100,
	"cursor": null,
	"result": MoralisPlayerResult[]
};

export const getPlayers = async (owner: string) => {
    // POST https://docs.moralis.io/api/api-backend
    const payload = { "hostUrl": "https://deep-index.moralis.io/api/v2.2", "path": `/${owner}/nft`, "method": "GET", "headers": { "accept": "application/json", "content-type": "application/json", "X-API-Key": "test", "Authorization": "Bearer test", "x-moralis-source": "Moralis API docs", "referer": "moralis.io" }, "query": { "chain": "base", "format": "decimal", "token_addresses": [CTG_CONTRACT], "media_items": false } }

    const result = await fetch('https://docs.moralis.io/api/api-backend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            referrer: 'moralis.io'
        },
        body: JSON.stringify(payload),
    });

    return result.json() as any as MoralisPlayerType;
};

export const usePlayers = (owner: string) => {
    return useSWR(owner, () => getPlayers(owner));
}

