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
                            The concept is simple, you put your trust in will, and will puts his trust in you.
                        </p>
                        <h2>Participate</h2>
                        <p>
                            Use the component below to delegate your jury duty to Will.
                            By staking your CTG Jury NFT, you are trusting your power to Will, and in return, you will receive a portion of the rewards.
                        </p>
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
