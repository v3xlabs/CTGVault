import { useAccount } from 'wagmi';

import { ConnectWallet } from './connectwallet/ConnectWallet.jsx';
import { Countdown } from './countdown/Countdown.jsx';
import { PlayerList } from './playerlist/PlayerList.jsx';
import { WalletInfo } from './walletinfo/WalletInfo.jsx';
import poster from '../public/poster.png?url';

export const App = () => {
    const { isConnected } = useAccount();

    return (
        <div className="">
            <div className="p-4 justify-center md:flex mt-8 md:mt-16">
                <div className="md:w-[500px] mr-10 mb-8 md:mb-0 w-full">
                    <img src={poster} />
                </div>
                <div className="max-w-lg border rounded-xl p-4 border-dark-border bg-dark-background-primary">
                    <div className="space-y-3">
                        <h2>The Concept</h2>
                        <p>
                            The concept is simple, delegate your Jury CTG NFT to
                            Will's Player NFT, and earn a portion of the
                            winnings. We WILL win.
                        </p>
                        <h2>How To</h2>
                        <p>
                            Use the button below to delegate your jury vote to
                            Will. By staking your CTG Jury NFT, you are "super
                            voting" for Will. He won't be able to withdraw the
                            NFT, just use it for the vote.
                        </p>
                        <p>
                            Once Will wins, he is only going to take 50% of the
                            pot. The other 50% will be given proportionally to
                            people that delegated their vote. The winnings will
                            automatically be sent alongside the delegated NFT
                            once the prize is recieved!
                        </p>
                        <h2>Is this a rug pull?</h2>
                        <p>
                            Nope! This is a collaboration between people from
                            IYK, Future Primitive (Authors of 6551), ENS, and
                            V3X to show off the power of decentralized digital
                            assets.
                        </p>
                        <p>
                            View the{' '}
                            <a
                                href="https://github.com/Ryan-Ouyang/6551-ctg-vault"
                                target="_blank"
                            >
                                source code of the contract
                            </a>
                            .
                        </p>
                        <h2>Countdown</h2>
                        <p>
                            Once the vote starts, you no longer will be able to
                            delgate your vote!
                        </p>
                        <Countdown to={new Date('2024-04-17T20:00:00.000Z')} />
                        <h2>My Jury Duty</h2>
                        <p>Delegate your CTG vote using the button below.</p>
                        {!isConnected && <ConnectWallet />}
                        {isConnected && <WalletInfo />}
                        {isConnected && <PlayerList />}
                    </div>
                </div>
            </div>
        </div>
    );
};
