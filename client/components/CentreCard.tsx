'use client';

import { useAccount } from "wagmi";
import { useState } from "react";
import { ConnectButton } from "@/components/ConnectButton";
import { fetchTransactions } from "@/hooks/useFaucet";
import { FaucetForm } from "@/components/FaucetForm";
import { TransactionList } from "@/components/TransactionList";

export const CentreCard = () => {
    const { isConnected } = useAccount();
    const [message, setMessage] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [fetchingTransactions, setFetchingTransactions] = useState(false);

    const handleFetchTransactions = async () => {
        setFetchingTransactions(true);
        const data = await fetchTransactions();
        setTransactions(data);
        setFetchingTransactions(false);
    };

    return (
        <div className="p-25 rounded-xl shadow-lg text-center w-150 bg-gray-600" ring-1>
            {!isConnected ? (
                <div>
                    <div >
                        <h2 className="text-xl font-bold">Connect to a Wallet</h2>
                        <p className="text-gray-400 text-sm mt-2">
                            Connect your wallet to begin the faucet transfer process.
                        </p>
                        <div className="object-center">
                            <ConnectButton />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <div className="object-center">
                            <ConnectButton />
                        </div>
                        <FaucetForm setMessage={setMessage} />
                        <button
                            onClick={handleFetchTransactions}
                            className="mt-2 bg-amber-500 text-white px-4 py-2 rounded w-full"
                            disabled={fetchingTransactions}
                        >
                            {fetchingTransactions ? 'Fetching...' : 'View Previous Transactions'}
                        </button>
                        {message && <p className="text-amber-400 mt-2">{message}</p>}
                        <TransactionList transactions={transactions} />
                    </div>
                </div>
            )}
        </div>
    );
};
