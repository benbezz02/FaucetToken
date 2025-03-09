export const requestFunds = async (COSMOS_address: string) => {
    try {
        const response = await fetch('http://localhost:5000/faucet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "ETH_address": "0x9913196017F3A1863BA7Ec5e66A5f0534ebC50a6",
                "COSMOS_address": COSMOS_address
            })
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            return { success: false, message: errorResponse.error || 'Request failed with an unknown error.' };
        }

        const successResponse = await response.json();
        return { success: true, message: successResponse.message || 'Request successful! Funds are on the way.' };
    } catch (error) {
        console.log(error);
        return { success: false, message: 'Error: Unable to request funds.' };
    }
};

export const fetchTransactions = async () => {
    try {
        const response = await fetch('http://localhost:5000/faucet');
        if (!response.ok) {
            throw new Error('Failed to fetch transactions');
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        return [];
    }
};
