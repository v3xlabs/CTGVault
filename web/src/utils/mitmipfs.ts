export const mitmipfs = (url: string) => {
    if (url.startsWith('ipfs://'))
        return url.replace('ipfs://', 'https://ipfs.io/ipfs/');

    return url;
};
