import { useState } from "react";
import { requestFunds } from "@/hooks/useFaucet";

export const FaucetForm = ({ setMessage }) => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const result = await requestFunds(inputValue);
        setMessage(result.message);
        setLoading(false);
    };

    return (
        <div className="mt-4">
            <input
                type="text"
                placeholder="Enter CosmosHub address"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="px-4 py-2 border rounded w-full text-black"
            />
            <button
                onClick={handleSubmit}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded w-full"
                disabled={loading}
            >
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    );
};
