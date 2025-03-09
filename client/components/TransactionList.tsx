export const TransactionList = ({ transactions }) => {
    if (transactions.length === 0) return null;

    return (
        <div className="mt-4 text-left text-white">
            <h3 className="font-bold">Previous Transactions:</h3>
            <ul className="mt-2 text-sm">
                {transactions.map((tx, index) => (
                    <li key={index} className="border-b border-gray-400 py-2">
                        <p><strong>COSMOS:</strong> {tx.COSMOS}</p>
                        <p><strong>ETH:</strong> {tx.ETH}</p>
                        <p><strong>Date:</strong> {new Date(tx.dateTime).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
