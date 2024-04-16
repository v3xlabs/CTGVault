export const App = () => {

    return (
        <div className="w-full">
            <div className="w-full max-w-xl p-4 mx-auto">
                <div className="w-full border rounded-xl p-4 border-dark-border bg-dark-background-primary">
                    <div className="flex flex-col gap-4">
                        <p>
                            Will is going to win, but will you?
                        </p>
                        <h2>The Concept</h2>
                        <p>
                            The concept is simple, delegate your Jury CTG NFT to Will's Player NFT, and earn a portion of the winnings.
                        </p>
                        <h2>Participate</h2>
                        <p>
                            Use the button below to delegate your jury vote to Will.
                            By staking your CTG Jury NFT, you are "super voting" for Will. He won't be able to withdraw the NFT, just use it for the vote.
                        </p>
                        <p>
                            Once Will wins, he is only going to take 50% of the pot. The other 50% will be given proportionally to people that delegated their vote.
                            The winnings will automatically be sent alongside the delegated NFT once the prize is recieved!
                        </p>
                        <h2>Is this a rug pull?</h2>
                        <p>Nope! This is a collaboration between people from IYK, NPC Labs (Authors of 6551), ENS, and V3X to show off the power of decentralized digital assets.</p>
                        <p>View the <a href="https://github.com/Ryan-Ouyang/6551-ctg-vault" target="_blank">source code of the contract</a>.</p>
                        <button className="w-full p-4 rounded-lg border border-dark-border hover:bg-dark-background-secondary cursor-pointer">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
