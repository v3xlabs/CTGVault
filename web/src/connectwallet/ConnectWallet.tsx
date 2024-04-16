import { useModal } from 'connectkit';

export const ConnectWallet = () => {
    const { setOpen } = useModal();

    return (
        <div>
            <button
                className="btn w-full"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Connect Wallet
            </button>
        </div>
    );
};
